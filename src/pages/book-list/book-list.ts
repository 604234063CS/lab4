import { BookDetailPage } from './../book-detail/book-detail';
import { Book } from './../../models/book.model';
import { BookReatProvider } from './../../providers/book-reat/book-reat';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  category:string;
  books:Book;

  constructor(public bookRest:BookReatProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

ionViewWillEnter(){
  console.log('ionViewWillEnter');
  this.category=this.navParams.get("category");
  console.log(this.category);
  this.bookRest.getBookList().subscribe( data =>{
       this.books=data.filter(book=> book.category === this.category);

    } 
  );


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookListPage');
    
  }

  goBack(){
    this.navCtrl.pop();
 }



 showBook(bookid:string){

  
  this.navCtrl.push( BookDetailPage, 
    {bookId:bookid}
    );

}
}
