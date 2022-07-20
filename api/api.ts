import { Storage } from "@ionic/storage";
import { $fetch, $Fetch, FetchOptions, SearchParams } from "ohmyfetch";

type RequestPayload = {
  [key: string]: Omit<FetchOptions<"json">, "method">
}
export interface ApiFetch {
  $get<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method"> | RequestPayload
  ): Promise<T>;
  $post<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method"> | RequestPayload
  ): Promise<T>;
  $put<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method"> | RequestPayload
  ): Promise<T>;
  $patch<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method"> | RequestPayload
  ): Promise<T>;
  $delete<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method"> | RequestPayload
  ): Promise<T>;
  $request: $Fetch;
  v1: Omit<ApiFetch, "v1">;
}

export default class Api {
  useApi = (baseURL: string): ApiFetch => {
    async function getJwt() {
      const storage = new Storage();
      await storage.create();
      const jwt = await storage.get("token");
      return jwt;
    }
    // const authCookies = useCookies(['token']);
    // const { public: config } = useRuntimeConfig();

    const apiFetch = $fetch.create({
      baseURL,
      headers: {
        Accept: "application/json, text/plain, */*",
      },
      async onRequest({ request, options }) {
        // if (getJwt()) {
        const jwt = await getJwt();
        console.log('JWT');
        console.log(jwt);
        (
          options.headers as Record<string, string>
        ).Authorization = `Bearer ${jwt}`;
        // }

        paramsSerializer(options.params);

        return Promise.resolve();
      },
    });

    function getApi(apiVersion: string = "") {
      return {
        $request: apiFetch,
        $get<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
          return apiFetch<T>(url, {
            baseURL: `${baseURL}/${apiVersion}`,
            ...options,
            method: "GET",
          });
        },
        $post<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
          return apiFetch<T>(url, {
            baseURL: `${baseURL}/${apiVersion}`,
            ...options,
            method: "POST",
          });
        },
        $put<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
          return apiFetch<T>(url, {
            baseURL: `${baseURL}/${apiVersion}`,
            ...options,
            method: "PUT",
          });
        },
        $patch<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
          return apiFetch<T>(url, {
            baseURL: `${baseURL}/${apiVersion}`,
            ...options,
            method: "PATCH",
          });
        },
        $delete<T>(
          url: string,
          options?: Omit<FetchOptions<"json">, "method">
        ) {
          return apiFetch<T>(url, { baseURL, ...options, method: "DELETE" });
        },
      };
    }

    return {
      ...getApi(),
      v1: getApi("/api/v1"),
    };
  };
}

function paramsSerializer(params?: SearchParams): void {
  if (!params) {
    return;
  }

  Object.entries(params).forEach(([key, val]) => {
    if (typeof val === "object" && Array.isArray(val) && val !== null) {
      params[key + "[]"] = val.map((v) => JSON.stringify(v));
      delete params[key];
    }
  });
}
