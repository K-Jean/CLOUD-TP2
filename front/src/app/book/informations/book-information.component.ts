import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './book-information.component.html'
})
export class BookInformationComponent implements OnInit {

    book$ : Observable<Book>

    edit: boolean

    constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {

    }

    ngOnInit(): void {
        this.edit = false;
        this.book$ = this.route.paramMap.pipe(
            flatMap((params: ParamMap) => {
            let bookId = params.get('id');
    
            return this.bookService.getBook(bookId);
        }))
    }

    deleteBook(id : number) : void {
        this.bookService.deleteBook(id).subscribe((success : boolean) => {
            this.router.navigate(['/']);
        })
    }

    editMode(edit : boolean) {
        this.edit = edit;
    }

    validate(book){
        this.bookService.updateBook(book);
        this.edit = false;
    }
}
