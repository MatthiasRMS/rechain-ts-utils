import api from "./api";
import { Repository as Repository } from './repository';
import ReviewCommentsRepository from './review_comments';
import AddressesRepository from './addresses';
import AttachmentsRepository from './attachments';
import CompaniesRepository from './companies';
import ManufacturerContactsRepository from './manufacturer_contacts';
import ManufacturerLocationsRepository from './manufacturer_locations';
import ManufacturerProductsRepository from './manufacturer_products';
import MilestonesRepository from './milestones';
import OrdersRepository from './orders';
import ProductCategoriesRepository from './product_categories';
import ProductPhotosRepository from './product_photos';
import ProductsRepository from './products';
import ReviewPhotosRepository from './review_photos';
import ReviewPinsRepository from './review_pins';
import ReviewsRepository from './reviews';
import TemplatesRepository from './templates';
import UserInvitesRepository from './user_invites';
import UsersRepository from './users';


export {
  Repository,
  AddressesRepository,
  AttachmentsRepository,
  CompaniesRepository,
  ManufacturerContactsRepository,
  ManufacturerLocationsRepository,
  ManufacturerProductsRepository,
  ProductPhotosRepository,
  ProductsRepository,
  ProductCategoriesRepository,
  OrdersRepository,
  MilestonesRepository,
  ReviewCommentsRepository,
  ReviewPhotosRepository,
  ReviewPinsRepository,
  ReviewsRepository,
  TemplatesRepository,
  UserInvitesRepository,
  UsersRepository,
  api,
}