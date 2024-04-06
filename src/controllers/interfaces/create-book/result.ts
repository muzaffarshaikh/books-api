import Response from '@dto/books-api/books/POST/request';

export default interface IResult {
  build(response: Response): void;
  getResponse(): Response;
}
