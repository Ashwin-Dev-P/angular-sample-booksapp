import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// To get data from backend
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Interface
import { MyGetBooksResponse } from '../MyGetBooksResponse';
import { Book } from '../Book';
import { MyPostResponse } from '../MyPostResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private backendUrl: string = 'http://localhost:5000/api/book';
  private res?: Observable<MyGetBooksResponse>;
  constructor(private http: HttpClient) {}

  getBooks(): Observable<MyGetBooksResponse> {
    try {
      this.res = this.http.get<MyGetBooksResponse>(this.backendUrl);
    } catch (error) {
      this.res = new Observable<{
        books: [];
        status: 500;
      }>();
    }
    return this.res;
  }

  deleteBook(_id: string) {
    console.log('Delete book service');
    const url = `${this.backendUrl}/${_id}`;
    return this.http.delete(url);
  }

  addBook(book: Book): Observable<MyPostResponse> {
    console.log(
      'Book service add triggered',
      this.backendUrl,
      book,
      httpOptions
    );
    return this.http.post<MyPostResponse>(this.backendUrl, book, httpOptions);
    console.log('Book service add triggeredsd');
  }
}
