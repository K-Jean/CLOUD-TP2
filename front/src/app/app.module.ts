import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BookCreateComponent } from './book/create/book-create.component';
import { BookListComponent } from './book/list/book-list.component';
import { BookInformationComponent } from './book/informations/book-information.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCreateComponent,
    BookListComponent,
    BookInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
