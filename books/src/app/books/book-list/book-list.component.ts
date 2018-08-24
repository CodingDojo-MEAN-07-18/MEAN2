import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from '../../models';
// import { BOOKS } from '../../data/book-data';

import { BookService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  selectedBook: Book;
  sub: Subscription;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.sub = this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

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

  onDelete(id: number) {
    console.log('delete');

    this.bookService.removeBook(id).subscribe(deletedBook => {
      // will not work!!!
      // this.books.indexOf(book);

      console.log('deleted book', deletedBook);

      this.books = this.books.filter(book => book._id !== deletedBook._id);
    });
  }

  onEvent(event: Event) {
    console.log('eventing');

    event.stopPropagation();
  }
}
