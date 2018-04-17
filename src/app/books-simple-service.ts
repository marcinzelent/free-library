import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Book } from './book'; 

@Injectable()
export class BooksSimpleService {
    constructor(private http: Http) { }

    public getBooks(): Observable<Response> {
        return this.http.get(`/api/books/`);
      }
}
