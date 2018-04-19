import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Book } from "../../models/book"
import { BooksService } from '../../services/books-service'
import { BookDetails } from '../../models/book-details';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [BooksService]
})
export class BookDetailsComponent implements OnInit {
  @Input() book;

  public details : BookDetails;

  constructor(
    private service: BooksService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.service.getBookDetails(this.book.slug).subscribe(response => this.details = response.json());
  }

}
