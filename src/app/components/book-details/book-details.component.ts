import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Book } from "../../models/book"
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

}
