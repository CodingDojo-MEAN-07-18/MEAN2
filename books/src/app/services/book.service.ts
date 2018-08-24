import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BOOKS } from '../data/book-data';
import { Book } from '../models';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private base = '/api/books';

  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    // return of(BOOKS);
    return this.http.get<Book[]>(this.base);
  }

  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.base}/${id}`);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.base, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.base}/${book._id}`, book);
  }

  removeBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.base}/${id}`);
  }
}
