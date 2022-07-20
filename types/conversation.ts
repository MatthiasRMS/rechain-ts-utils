import { Attachment } from '../types/attachment';
import { CustomOffer } from '../types/custom_offer';
import { SmallUser, User } from './user';

export interface Conversation {
  id: number;
  firstCompanyId: number;
  secondCompanyId: number;
  firstCompanyRead: boolean;
  secondCompanyRead: boolean;
  otherPartyUsers: User[];
  lastMessage: {
    content: string;
    user: {
      fullname: string;
    }
  }
}

interface ProductPhoto {
  id: number;
  fileUrl: string;
}

interface MessageProduct {
  id: number;
  name: string;
  description: string;
  productPhotos: ProductPhoto[];
}

export interface FeedItem {
  id: number;
  createdAt: string; // as UTC String Date
  user: SmallUser;
  itemType: 'message' | 'customOffer' | 'acceptedCustomOffer' | 'rejectedCustomOffer' | 'attachment';
}

export interface MessageFeed extends FeedItem {
  content: string;
  itemType: 'message'
}

export interface AttachmentFeed extends FeedItem, Attachment {
  itemType: 'attachment'
}

export interface MessageProductFeed extends MessageFeed {
  product: MessageProduct;
}

export interface CustomOfferFeed extends FeedItem, CustomOffer {
  history: boolean;
}

export interface AcceptedCustomOfferFeed extends CustomOfferFeed {
  itemType: 'acceptedCustomOffer';
}

export interface RejectedCustomOfferFeed extends CustomOfferFeed {
  itemType: 'rejectedCustomOffer';
}
