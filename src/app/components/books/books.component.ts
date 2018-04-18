import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book'
import { BooksService } from '../../services/books-service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent {

  public books : Book[];
  constructor(service: BooksService) {
    service.getBooks().subscribe(response => this.books = response.json());
   }
}
