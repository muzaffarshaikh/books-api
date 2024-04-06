import Request from '@dto/books-api/books/POST/request';

export default interface IConfig {
  build(request: Request): void;
  getRequest(): Request;
}
