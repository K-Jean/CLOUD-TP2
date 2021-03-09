import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  /* here you need to put the logic to call the back */
  getBooks() : Observable<Array<Book>> {
    return this.http.get<Array<Book>>(environment.api + '/book');
  }

  getBook(id: number | string) : Observable<Book> {
    return this.http.get<Book>(`${environment.api}/book/${id}`);
  }

  deleteBook(id: number | string) : Observable<boolean> {
    return this.http.delete<boolean>(`${environment.api}/book/${id}`);
  }

  /* pour bien faire il faudrait récupérer les codes http */
  createBook(book: Book) : void {
    this.http.post(environment.api + '/book', book).subscribe();
  }

  updateBook(book: Book) : void {
    this.http.put(`${environment.api}/book/${book.id}`, book).subscribe();
  }

}
