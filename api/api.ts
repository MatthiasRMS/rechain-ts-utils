// import { useCookies } from '@vueuse/integrations/useCookies';
import { Storage } from "@ionic/storage";
import {
  $fetch,
  $Fetch,
  FetchOptions,
  FetchContext,
  SearchParams,
} from "ohmyfetch";

export interface ApiFetch {
  $get<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method">
  ): Promise<T>;
  $post<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method">
  ): Promise<T>;
  $put<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method">
  ): Promise<T>;
  $patch<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method">
  ): Promise<T>;
  $delete<T>(
    url: string,
    options?: Omit<FetchOptions<"json">, "method">
  ): Promise<T>;
  $request: $Fetch;
  v1: Omit<ApiFetch, "v1">;
}

export const useApi = (baseURL: string): ApiFetch => {
  async function getJwt() {
    const storage = new Storage();
    await storage.create();
    const jwt = await storage.get("token");
    return jwt;
  }
  // const authCookies = useCookies(['token']);
  // const { public: config } = useRuntimeConfig();
  const jwt = getJwt();
  const apiFetch = $fetch.create({
    baseURL,
    headers: {
      Accept: "application/json, text/plain, */*",
    },
    onRequest({ request, options }) {
      if (jwt) {
        (
          options.headers as Record<string, string>
        ).Authorization = `Bearer ${jwt}`;
      }

      paramsSerializer(options.params);

      return Promise.resolve();
    },
  });

  function getApi(basePath = "") {
    return {
      $request: apiFetch,
      $get<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
        return apiFetch<T>(url, { baseURL, ...options, method: "GET" });
      },
      $post<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
        return apiFetch<T>(url, { baseURL, ...options, method: "POST" });
      },
      $put<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
        return apiFetch<T>(url, { baseURL, ...options, method: "PUT" });
      },
      $patch<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
        return apiFetch<T>(url, { baseURL, ...options, method: "PATCH" });
      },
      $delete<T>(url: string, options?: Omit<FetchOptions<"json">, "method">) {
        return apiFetch<T>(url, { baseURL, ...options, method: "DELETE" });
      },
    };
  }

  return {
    ...getApi(),
    v1: getApi("/api/v1"),
  };
};

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

// export { useUser, useUsers, registerUser } from './users';
