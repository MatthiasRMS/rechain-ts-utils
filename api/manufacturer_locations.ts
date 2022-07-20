import { Repository } from './repository';
import { ManufacturerLocation } from '../types/manufacturer_location';

export default class ManufacturerLocationsRepository extends Repository {
  index(companyId: number) {
    return this.api.$get<ManufacturerLocation[]>('/api/v1/manufacturer_locations', {
      params: {
        companyId,
      },
    });
  }

  create(payload: any) {
    return this.api.$post<ManufacturerLocation>('/api/v1/manufacturer_locations', {
      body: {
        manufacturerLocation: payload,
      },
    });
  }

  update(id: number, payload: any) {
    return this.api.$put<ManufacturerLocation>(`/api/v1/manufacturer_locations/${id}`, {
      body: {
        manufacturerLocation: payload,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/manufacturer_locations/${id}`);
  }
}
