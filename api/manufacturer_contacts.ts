import { Repository } from './repository';
import { ManufacturerContact } from '../types/manufacturer_contact';

export default class ManufacturerContactsRepository extends Repository {
  index(companyId: number) {
    return this.api.$get<ManufacturerContact[]>('/api/v1/manufacturer_contacts', {
      params: {
        companyId,
      },
    });
  }

  create(payload: any) {
    return this.api.$post<ManufacturerContact>('/api/v1/manufacturer_contacts', {
      body: {
        manufacturerContact: payload,
      },
    });
  }

  update(id: number, payload: any) {
    return this.api.$put<ManufacturerContact>(`/api/v1/manufacturer_contacts/${id}`, {
      body: {
        manufacturerContact: payload,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/manufacturer_contacts/${id}`);
  }
}
