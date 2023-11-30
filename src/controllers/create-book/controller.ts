import { inject, injectable } from 'inversify';
import { JsonSerializer } from 'typescript-json-serializer';
import { v4 as UUIDv4 } from 'uuid';
import {
  IController as ICreateBookController,
  IConfig as ICreateBookConfig,
  IResult as ICreateBookResult,
} from '@controllers/interfaces/create-book';
import IBookService from '@services/interfaces';
import Book from '@models/book';
import Response from '@dto/books-api/books/POST/response';
import TYPES from 'src/inversify/types';
import CustomError from '../../utils/custom-error';

enum ErrorCodes {
  FORBIDDEN_ERROR = 'error.books-api.create-book.forbidden',
}

@injectable()
export default class Controller implements ICreateBookController {
  private result!: ICreateBookResult;

  private bookService!: IBookService;

  constructor(
    @inject(TYPES.ICreateBookControllerResult) result: ICreateBookResult,
    @inject(TYPES.IBookService) bookService: IBookService
  ) {
    this.result = result;
    this.bookService = bookService;
  }

  process(config: ICreateBookConfig): ICreateBookResult {
    try {
      const request = config.getRequest();
      const validationResult = request.validate();
      if (validationResult.error) {
        console.log('Validation Error');
        throw new CustomError(
          ErrorCodes.FORBIDDEN_ERROR,
          `Validation of request failed with message: ${validationResult.error.message}`
        );
      }
      const jsonSerializer = new JsonSerializer();
      const book = jsonSerializer.deserializeObject(request, Book) as Book;
      book.setID(UUIDv4());

      const createBookResponse = this.bookService.createBook(book);

      const response = jsonSerializer.deserializeObject(
        createBookResponse,
        Response
      ) as Response;

      this.result.build(response);
    } catch (error) {
      console.error('CreateBookController.process() Error:', error);
      throw error;
    }
    return this.result;
  }
}
