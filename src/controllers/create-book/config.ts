import Request from '@dto/books-api/books/POST/request';
import { IConfig } from '@controllers/interfaces/create-book';
import { injectable } from 'inversify';

@injectable()
export default class Config implements IConfig {
  private request!: Request;

  build(request: Request): void {
    this.request = request;
  }

  getRequest(): Request {
    return this.request;
  }
}
