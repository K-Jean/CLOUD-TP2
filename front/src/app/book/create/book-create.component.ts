import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './book-create.component.html'
})
export class BookCreateComponent {

    book = new Book();

    constructor(private bookService: BookService) {

    }

    validate(){
        this.bookService.createBook(this.book);
    }
}
