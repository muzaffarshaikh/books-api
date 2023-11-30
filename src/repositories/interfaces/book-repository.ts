import { Book } from '../../models';

export default interface IBookRepository {
  createBook(book: Book): Promise<Book>;
}
