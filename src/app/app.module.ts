import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { AudiobooksComponent } from './components/audiobooks/audiobooks.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const appRoutes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'audiobooks', component: AudiobooksComponent},
  {path: 'book-details', component: BookDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AudiobooksComponent,
    BookDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
