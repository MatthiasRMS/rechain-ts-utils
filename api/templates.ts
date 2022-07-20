import { Repository } from './repository';
import { Template } from '../types/template';

export default class TemplatesRepository extends Repository {
  index(companyId: number) {
    return this.api.$get<Template[]>('/api/v1/templates', {
      params: {
        companyId,
      },
    });
  }

  show(id: number) {
    return this.api.$get<Template>(`/api/v1/templates/${id}`);
  }

  update(id: number, payload: any) {
    return this.api.$put(`/api/v1/templates/${id}`, {
      body: {
        template: payload,
      },
    });
  }
}
