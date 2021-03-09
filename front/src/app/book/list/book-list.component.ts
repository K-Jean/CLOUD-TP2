import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {

  books$: Observable<Array<Book>>

  constructor(private bookService: BookService) {

  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }

  deleteBook(id : number) : void {
    this.bookService.deleteBook(id).subscribe((success : boolean) => {
        //if false popup error ? 
        //reload list of books
        this.books$ = this.books$.pipe(
          map(books => {
            return books.filter((book) => book.id != id);
          })
        );
    })
  }

}
