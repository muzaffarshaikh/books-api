const TYPES = {
  DBURL: Symbol.for('DBURL'),
  IBookService: Symbol.for('IBookService'),
  BookService: Symbol.for('BookService'),

  IBookRepository: Symbol.for('IBookRepository'),
  BookRepository: Symbol.for('BookRepository'),

  ICreateBookController: Symbol.for('ICreateBookController'),
  ICreateBookControllerConfig: Symbol.for('ICreateBookControllerConfig'),
  ICreateBookControllerResult: Symbol.for('ICreateBookControllerResult'),
  CreateBookController: Symbol.for('CreateBookController'),
  CreateBookControllerConfig: Symbol.for('CreateBookControllerConfig'),
  CreateBookControllerResult: Symbol.for('CreateBookControllerResult'),
};

// eslint-disable-next-line import/prefer-default-export
export { TYPES };
