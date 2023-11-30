import { inject, injectable } from 'inversify';
import { Book } from '../models';
import TYPES from '../inversify/types';
import IBookRepository from '../repositories';
import IBookService from './interfaces';

@injectable()
export default class BookService implements IBookService {
  private bookRepository!: IBookRepository;

  constructor(@inject(TYPES.IBookRepository) bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  async createBook(book: Book): Promise<Book> {
    try {
      return this.bookRepository.createBook(book);
    } catch (error) {
      console.error('BookService.createBook() Error:', error);
      throw error;
    }
  }
}
