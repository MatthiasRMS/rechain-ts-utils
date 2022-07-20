import { FiltersType, Repository } from './repository';
import { User, NewUserParams } from '../types/user';
import {FetchOptions } from 'ohmyfetch';
export default class UsersRepository extends Repository {
  create(params: Omit<FetchOptions<"json">, "method">) {
    return this.api.$post<User>('/api/v1/users', {
      user: params,
    });
  }

  getAll(params: { companyId?: number, searchQuery?: string, filters?: FiltersType }) {
    return this.api.$get<User[]>('/api/v1/users', {
      params,
    });
  }

  show(id: number, token: string = '') {
    return this.api.$get<User>(`/api/v1/users/${id}?token=${token}`);
  }

  update(userId: number, payload: any) {
    console.log(payload);
    return this.api.$put<User>(`/api/v1/users/${userId}`, {
      body: {
        user: payload,
      },
    });
  }

  // updatePicture(userId: number, formData: any) {
  //   return this.api.$put(`/api/v1/users/${userId}/picture`,
  //     formData,
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     }
  //   )
  // }
}
