import { request } from '@/utils/request';
import { DocumentDTO } from './types';

class DocumentsService {
  async getData() {
    try {
      const res = await request.get<DocumentDTO[]>(`/documents`);

      const { data } = res;

      return data;

    } catch (e) {
      console.log(e);
    }
  }
}

export const documentsService = new DocumentsService();
