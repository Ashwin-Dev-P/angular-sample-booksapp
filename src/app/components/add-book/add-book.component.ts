import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();

  title?: string;
  description?: string;
  price?: number;

  onSubmitBook() {
    console.log('Submitting book');

    if (!this.title) {
      alert('Please add a title!');
      return;
    }

    if (!this.description) {
      alert('Please add a description!');
      return;
    }

    if (!this.price) {
      alert('Please enter the price!');
      return;
    }

    const newBook: Book = {
      title: this.title,
      description: this.description,
      price: this.price,
      _id: '',
      __v: '',
    };

    console.log(newBook);
    this.onAddBook.emit(newBook);

    this.resetFormData();
  }

  resetFormData() {
    this.title = '';
    this.description = '';
    this.price = 0;
  }
}
