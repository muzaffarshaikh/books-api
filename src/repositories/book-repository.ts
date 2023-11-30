import { injectable, inject } from 'inversify';
import { TYPES } from '../inversify/types';
import { Book } from '../models';
import { IBookRepository } from './interfaces';

@injectable()
export default class BookRepository implements IBookRepository {
  private dbURL: string;

  constructor(@inject(TYPES.DBURL) dbURL: string) {
    this.dbURL = dbURL;
  }

  // eslint-disable-next-line class-methods-use-this
  async createBook(book: Book): Promise<Book> {
    try {
      console.log('dbURL:', this.dbURL);
      return book;
    } catch (error) {
      console.error('BookRepository.createBook() Error:', error);
      throw error;
    }
  }
}
