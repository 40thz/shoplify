import { HTTPTransport } from '@/shared/lib/HTTPTransport/HTTPTransport';
import { UserSignup } from '../model/types';

class UserService extends HTTPTransport {
  constructor() {
    super('user');
  }

  create(dto: UserSignup) {
    return this.http.post('/', dto);
  }
}

export const userService = new UserService();
