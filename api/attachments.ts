import { Repository } from './repository';
import { Attachment, AttachmentCategory, NewAttachment, NewAttachmentDtoParams } from '../types/attachment';

export default class AttachmentsRepository extends Repository {
  index(companyId: number) {
    return this.api.$get('/api/v1/addresses', {
      params: {
        companyId,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/attachments/${id}`);
  }

  categories() {
    // TODO Add caching here to avoid multiple request with same response
    return this.api.$get<AttachmentCategory[]>('/api/v1/attachment_categories').then((data) => {
      return data.sort((category1, category2) => category1.en.localeCompare(category2.en));
    });
  }

  presignedFileUrl(filename: string) {
    return this.api.$get<string>(`/api/v1/attachments/signed_url?filename=${filename}`);
  }

  /** Create a presigned url, upload the given file, and create the Attachment entity */
  async uploadAndCreate(payload: NewAttachment & { userId: number; }, onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void): Promise<Attachment> {
    const presignedUrl = await this.presignedFileUrl(payload.name);
    await this.upload(payload.file, presignedUrl, onUploadProgress);

    const [cleanedUrl] = presignedUrl.split('?');

    const attachmentParams: NewAttachmentDtoParams = {
      name: payload.name,
      file: cleanedUrl,
      userId: payload.userId,
      attachmentCategoryId: payload.category.id,
      productId: payload.productId,
      conversationId: payload.conversationId,
      customOfferId: payload.customOfferId,
      orderId: payload.orderId,
      milestoneId: payload.milestoneId,
      supplierId: payload.supplierId,
    };

    return this.api.$post<Attachment>('/api/v1/attachments', {
      body: {
        attachment: attachmentParams,
      },
    });
  }

  create(payload: Attachment | (NewAttachment & { userId: number }), onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void) {
    if ((payload as Attachment).fileUrl) {
      const attachmentParams: NewAttachmentDtoParams = {
        name: payload.name,
        file: (payload as Attachment).fileUrl,
        userId: (payload as Attachment).user.id,
        attachmentCategoryId: payload.category.id,
        productId: payload.productId,
        conversationId: payload.conversationId,
        customOfferId: payload.customOfferId,
        orderId: payload.orderId,
        milestoneId: payload.milestoneId,
        supplierId: payload.supplierId,
      };

      return this.api.$post<Attachment>('/api/v1/attachments', {
        body: {
          attachment: attachmentParams,
        },
      });
    }

    return this.uploadAndCreate(payload as NewAttachment & { userId: number }, onUploadProgress);
  }

  /** Upload a file through the api
   * @param file The file to upload
   * @param uploadUrl Optional S3 upload url. Will request one if not provided
   * @param onUploadProgress Optional callback to listen to progress events
   */
  async upload(file: File, uploadUrl?: string, _onUploadProgress?: (progressEvent: ProgressEvent<EventTarget>) => void) {
    const fileName = file?.name.replace('(', '').replace(')', '').replace(/\s+/g, '-');
    const presignedUrl = uploadUrl || await this.presignedFileUrl(fileName);

    return this.api.$request(presignedUrl, {
      method: 'PUT',
      body: file,
      baseURL: '',
      headers: {
        'Content-Type': file.type,
      },
      // Remove default JWT authorization before requesting AWS
      async onRequest({ options }) {
        delete (options.headers! as Record<string, string>).Authorization;
      },
      async onResponse() {
        // onUploadProgress();
      },
    });
  }
}
