import { Repository } from './repository';
import { CountriesDTO } from '../types/address';
import { FetchOptions } from 'ohmyfetch';

export default class AddressesRepository extends Repository {
  index(companyId: number) {
    return this.api.$get('/api/v1/addresses', {
      params: {
        companyId,
      },
    });
  }

  create(payload: Omit<FetchOptions<"json">, "method">) {
    return this.api.$post('/api/v1/addresses', {
      address: payload,
    });
  }

  show(id: number) {
    return this.api.$get(`/api/v1/addresses/${id}`);
  }

  update(payload: any, id: number) {
    return this.api.$put(`/api/v1/addresses/${id}`, {
      body: {
        company: payload,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/addresses/${id}`);
  }

  countries(): Promise<CountriesDTO> {
    return this.api.$get<{ countries: CountriesDTO }>('/api/v1/addresses/countries').then(data => data.countries);
  }
}
