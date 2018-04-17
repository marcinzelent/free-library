import { Component, OnInit } from '@angular/core';

import { Book } from '../book'
import { BooksSimpleService } from '../books-simple-service'

@Component({
  selector: 'app-simple-http-service',
  templateUrl: './simple-http-service.component.html',
  styleUrls: ['./simple-http-service.component.css'],
  providers: [BooksSimpleService]
})
export class SimpleHttpServiceComponent {

  public books : Book[];
  constructor(service: BooksSimpleService) {
    service.getBooks().subscribe(response => this.books = response.json());
   }
}
