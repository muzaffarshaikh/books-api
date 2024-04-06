import { Container } from 'inversify';
import {
  IController,
  IConfig,
  IResult,
} from '@controllers/interfaces/create-book';
import { Controller, Config, Result } from '@controllers/create-book';
import { BookRepository } from '../repositories';
import { IBookRepository } from '../repositories/interfaces';
import { BookService } from '../services';
import { IBookService } from '../services/interfaces';
import { TYPES } from './types';

const container = new Container();

container.bind(TYPES.DBURL).toConstantValue('http://localhost:3000');

container.bind<IBookRepository>(TYPES.BookService).to(BookRepository);
container.bind<IBookService>(TYPES.BookService).to(BookService);

container.bind<IController>(TYPES.CreateBookController).to(Controller);
container.bind<IConfig>(TYPES.CreateBookControllerConfig).to(Config);
container.bind<IResult>(TYPES.CreateBookControllerResult).to(Result);

// eslint-disable-next-line import/prefer-default-export
export { container };
