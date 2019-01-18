import { Book } from './../../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BookReatProvider {

  private url="https://raw.githubusercontent.com/kesinee-bo/Images/master/cs_books.json ";

  constructor(public http: HttpClient) {
    console.log('Hello BookReatProvider Provider');
  }

  getBookList():Observable<any>
  {
    return this.http.get<Book>(this.url);
  }

}
