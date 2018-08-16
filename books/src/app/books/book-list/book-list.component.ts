import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';
// import { BOOKS } from '../../data/book-data';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
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

      this.books = this.books.filter(book => book.id !== deletedBook.id);
    });
  }

  onEvent(event: Event) {
    console.log('eventing');

    event.stopPropagation();
  }
}
