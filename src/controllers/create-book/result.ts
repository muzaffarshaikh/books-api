import { injectable } from 'inversify';
import { IResult } from '@controllers/interfaces/create-book';
import Response from '@dto/books-api/books/POST/request';

@injectable()
export default class Result implements IResult {
  private response!: Response;

  build(response: Response): void {
    this.response = response;
  }

  getResponse(): Response {
    return this.response;
  }
}
