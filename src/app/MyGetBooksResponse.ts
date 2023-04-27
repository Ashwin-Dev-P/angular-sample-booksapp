import { Book } from './Book';

export interface MyGetBooksResponse {
  books: Book[];
  status: Number;
}
