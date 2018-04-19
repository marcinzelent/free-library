import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Book } from '../../models/book'
import { BooksService } from '../../services/books-service'
import { BookDetailsComponent } from '../book-details/book-details.component'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  public books : Book[];
  private selectedBook : Book;

  constructor(private service: BooksService,
    private modalService: NgbModal) {
    service.getBooks().subscribe(response => this.books = response.json());
   }

   ngOnInit() {}

  public onSelect(book : Book){
     this.selectedBook = book;
     this.open();
  }

  open() {
    const modalRef = this.modalService.open(BookDetailsComponent, {size: 'xl' as 'lg'});
    modalRef.componentInstance.book = this.selectedBook;
  }
}
