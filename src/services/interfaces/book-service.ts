import { Book } from '../../models';

export default interface IBookService {
  createBook(book: Book): Promise<Book>;
}
