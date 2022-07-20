import { SmallUser } from './user';
import { Translated } from './utils';

export interface AttachmentCategory extends Translated {
  id: number;
}

interface BaseAttachment {
  name: string;
  conversationId?: number;
  productId?: number;
  orderId?: number;
  milestoneId?: number;
  customOfferId?: number;
  supplierId?: number;
}

export interface Attachment extends BaseAttachment {
  id: number;
  name: string;
  createdAt: string;
  fileUrl: string;
  customOfferId?: number;
  productId?: number;
  orderId?: number;
  milestoneId?: number;
  conversationId?: number;
  category: AttachmentCategory;
  user: SmallUser
}

export interface NewAttachment extends BaseAttachment {
  file: File;
  category: AttachmentCategory;
}

export interface NewAttachmentDtoParams extends BaseAttachment {
  file: string,
  userId: number;
  attachmentCategoryId: number;
}
