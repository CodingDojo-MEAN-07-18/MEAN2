import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit {
  book: Book = new Book();

  @Output()
  addBook = new EventEmitter<Book>();

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    // this.books.push(this.book);

    this.bookService.createBook(this.book).subscribe(book => {
      this.addBook.emit(book);
      this.book = new Book();
      form.reset();
    });

    // console.log(this.books);
  }
}
