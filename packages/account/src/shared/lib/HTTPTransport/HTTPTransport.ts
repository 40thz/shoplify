import { AxiosInstance } from 'axios';
import { axiosInstance } from './axios-instance';

export abstract class HTTPTransport {
  protected http: AxiosInstance;

  protected constructor(endpoint: string) {
    this.http = axiosInstance(`api/v1/${endpoint}`);
  }
}
