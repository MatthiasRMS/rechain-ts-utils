export interface Picture {
  url?: string;
}

export interface UserPassword {
  password: string;
  passwordConfirmation: string;
}

interface BaseUser {
  email: string;
  companyId?: number;
  buyerId?: number;
  firstName: string;
  lastName: string;
  picture?: Picture;
  phone?: string;
  validated?: boolean;
}

export interface User extends BaseUser {
  id: number;
  fullName: string;
}

export interface SmallUser {
  id: number;
  fullName: string;
  pictureUrl: string;
}

export interface NewUserParams extends BaseUser, UserPassword {
  role?: string;
}
