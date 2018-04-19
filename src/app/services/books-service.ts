import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book'; 

@Injectable()
export class BooksService {
    constructor(private http: Http) { }

    public getBooks(): Observable<Response> {
        return this.http.get('/api/authors/hans-christian-andersen/books/');
    }

    public getAudiobooks(): Observable<Response> {
        return this.http.get('/api/authors/hans-christian-andersen/audiobooks/');
    }

    public getBookDetails(slug : string): Observable<Response> {
        return this.http.get('/api/books/' + slug + '/')
    }
}
