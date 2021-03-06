import { Component, OnInit, Input } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Book } from '../../models';

import { BookService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   const id = params.get('book_id');

    //   this.bookService.getBook(id).subscribe(book => (this.book = book));
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(id => {
          return this.bookService.getBook(id);
        })
      )
      .subscribe(book => (this.book = book));
  }
}
