export interface Company {
  id: number;
  name: string;
  country: string;
  city?: any;
  address?: any;
  postalCode?: any;
  phoneNumber?: any;
  createdAt: string;
  updatedAt: string;
  supplier: boolean;
  province?: any;
  skills: any[];
  eori?: any;
  vatNumber?: any;
  avgLeadTimeDays?: number;
  avgLeadTimeWeeks?: number;
  shippingFrom?: any;
  activeSince?: any;
  description?: string;
  coverPhoto?: File;
  coverPhotoUrl?: string;
  profilePicture?: File;
  profilePictureUrl?: string;
  stripeId?: any;
}

export interface NewCompanyParams {
  name: string;
  eori?: string;
  vatNumber?: string;
  supplier: boolean;
  productType: any;
  website?: string;
  creationDate: Date;
  country: string;
  city?: string;
  address?: string;
  province?: string;
  postalCode?: string;
  avgLeadTimeDays?: number;
  avgLeadTimeWeeks?: number;
  shippingFrom?: string;
  activeSince?: string;
  description?: string;
  coverPhoto?: File;
  profilePicture?: File;
  validated?: boolean;
}
