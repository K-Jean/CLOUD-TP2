import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookCreateComponent } from './book/create/book-create.component';
import { BookListComponent } from './book/list/book-list.component';
import { BookInformationComponent } from './book/informations/book-information.component';


const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book/create', component: BookCreateComponent },
  { path: 'book/:id', component: BookInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
