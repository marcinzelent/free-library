import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book'
import { BooksService } from '../../services/books-service'

@Component({
  selector: 'app-audiobooks',
  templateUrl: './audiobooks.component.html',
  styleUrls: ['./audiobooks.component.css'],
  providers: [BooksService]
})
export class AudiobooksComponent implements OnInit {

  public books : Book[];
  constructor(service: BooksService) {
    service.getAudiobooks().subscribe(response => this.books = response.json());
   }

  ngOnInit() {
  }

}
