import { request } from '@/utils/request';
import { DocumentDTO } from './types';

class DocumentsService {
  async getData() {
    try {
      const res = await request.get<DocumentDTO>(`/init`);

      const { data } = res;

      return data.message;
    } catch (e) {
      console.log(e);
    }
  }
}

export const documentsService = new DocumentsService();
