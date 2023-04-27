import { Component, Input, Output, EventEmitter } from '@angular/core';

// Interface/model
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css'],
})
export class BooksItemComponent {
  @Input() book?: Book;

  // Emit back the delete event to the parent component
  @Output() onDeleteBook: EventEmitter<string> = new EventEmitter();

  constructor() {}

  onDeleteClick(_id?: string) {
    console.log('clicked', _id);
    this.onDeleteBook.emit(_id);
  }
}
