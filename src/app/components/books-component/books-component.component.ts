import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/Book';
import { MyGetBooksResponse } from 'src/app/MyGetBooksResponse';

// Service
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-component',
  templateUrl: './books-component.component.html',
  styleUrls: ['./books-component.component.css'],
})
export class BooksComponentComponent {
  error?: string;
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  // Similar to 'ComponentDidMount' in React JS
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((response) => {
      if (response.status != 200) {
        this.error = 'Unable to fetch data';
      } else {
        this.books = response.books;
      }
    });
  }

  deleteBook(_id: string) {
    console.log('Book component trioggered');
    this.bookService
      .deleteBook(_id)
      .subscribe(() => (this.books = this.books.filter((b) => b._id !== _id)));
  }

  addBook(book: Book) {
    this.bookService.addBook(book).subscribe((res) => {
      console.log(res);
      if (res.status == 200) {
        this.books.push(res.bookobj);
        console.log(this.books);
      }
    });
  }
}
