import { Repository } from './repository';
import { Company, NewCompanyParams } from '../types/company';

export default class CompaniesRepository extends Repository {
  index(filters: Array<object>) {
    return this.api.$get<Company[]>('/api/v1/companies', {
      params: {
        filters,
      },
    });
  }

  customers(id: number) {
    return this.api.$get<Company[]>(`/api/v1/companies/${id}/customers`);
  }

  suppliers(id: number) {
    return this.api.$get<Company[]>(`/api/v1/companies/${id}/suppliers`);
  }

  create(payload: NewCompanyParams) {
    return this.api.$post<Company>('/api/v1/companies', { body: payload });
  }

  show(id: number) {
    return this.api.$get<Company>(`/api/v1/companies/${id}`);
  }

  updateSupplier(id: number, payload: any) {
    return this.api.$put<Company>(`/api/v1/suppliers/${id}`, {
      body: {
        supplier: payload,
      },
    });
  }

  showSupplier(id: number) {
    return this.api.$get<Company>(`/api/v1/suppliers/${id}`);
  }

  async update(id: number, payload: NewCompanyParams) {
    const updateCompany = this.api.$put<Company>(`/api/v1/companies/${id}`, {
      body: {
        company: payload,
      },
    });

    let updateCoverPhoto: Promise<Company> | undefined;

    if (payload.coverPhoto) {
      const formData = new FormData();
      formData.append('cover_photo', payload.coverPhoto);
      updateCoverPhoto = fetch(`http://localhost:3000/api/v1/companies/${id}/cover_photo`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res => res.json());
    }

    let updateProfilePicture: Promise<Company> | undefined;

    if (payload.profilePicture) {
      const formData = new FormData();
      formData.append('profile_picture', payload.profilePicture);
      updateProfilePicture = fetch(`http://localhost:3000/api/v1/companies/${id}/profile_picture`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res => res.json());
    }

    const [updatedCompany, newCoverPhotoCompany, newProfilePictureCompany] = await Promise.all([updateCompany, updateCoverPhoto, updateProfilePicture]);
    updatedCompany.coverPhotoUrl = newCoverPhotoCompany?.coverPhotoUrl;
    updatedCompany.profilePictureUrl = newProfilePictureCompany?.profilePictureUrl;
    return updatedCompany;
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/companies/${id}`);
  }
}
