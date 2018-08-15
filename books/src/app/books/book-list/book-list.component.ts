import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';
import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;

  constructor() {}

  ngOnInit() {}

  onSelect(book: Book) {
    console.log('selecting', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // dos omething else
    // } else {
    //   this.selectedBook = book;
    // }
  }

  createBook(event: Book) {
    console.log('creating book', event);

    this.books.push(event);
  }
}
