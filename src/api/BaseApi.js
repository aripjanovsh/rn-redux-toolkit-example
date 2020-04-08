import HttpClient from './HttpClient';

export class BaseApi {
  constructor() {
    this.httpClient = HttpClient;
  }
}
