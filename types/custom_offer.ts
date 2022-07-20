import { Attachment } from './attachment';
import { Product } from './product';

export const DUE_DATE_OPTIONS = ['before', '30days', '60days'] as const;
export type DueDate = typeof DUE_DATE_OPTIONS[number] | null;

export type CustomOfferStatus = 'pending' | 'accepted' | 'rejected';

export enum PaymentTerms {
  SingleAtOrder = 'upfront',
  AdvanceAtOrder = 'advance',
  // FullAtShipping = 'fullshipping',
}

// Enum values are used for translations
export enum PaymentDue {
  Before = '0',
  Days30 = '30',
  Days60 = '60',
}

export interface NewCustomOptionPayload {
  name: string;
  content: string;
  customOfferId: number;
}

export interface CustomOption {
  customOfferId: number;
  name: string;
  description: string;
  price: number;
}

export interface CustomOffer {
  id: number;
  name: string;
  productId: number;
  description: string;
  pricePerUnit: number;
  numberOfUnits: number;
  leadTime: number;
  paymentShareAtOrder: number;
  remainingPaymentDueAt: PaymentDue | null;
  taxRate: number;
  shippingFee: number;
  status: CustomOfferStatus;
  offerOptions: CustomOption[];
  attachments: Attachment[];
  createdAt: string;
  updatedStatusAt: string;
}

export interface NewCustomOfferPayload {
  name: string;
  productId: number;
  description: string;
  pricePerUnit: number;
  numberOfUnits: number;
  leadTime: number;
  paymentShareAtOrder: number;
  remainingPaymentDueAt: PaymentDue | null;
  taxRate: number;
  shippingFee: number;
  conversationId?: number;
  status?: CustomOfferStatus;
}

export interface NewCustomOffer {
  name: string;
  product: Product | null;
  description: string;
  pricePerUnit: number;
  numberOfUnits: number;
  leadTime: number;
  paymentShareAtOrder: number;
  remainingPaymentDueAt: PaymentDue | null;
  taxRate: number;
  shippingFee: number;
}
