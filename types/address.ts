export type SelectOption = { code: string | null, name: string };

export interface Address {
  id?: number;
  name?: string;
  companyId?: number;
  city?: string;
  line1?: string;
  line2?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  postalCode?: string;
}

export type CountriesDTO = Record<string, string>;
export interface Country extends SelectOption {};
