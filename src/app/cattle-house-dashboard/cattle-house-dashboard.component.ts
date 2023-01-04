import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cattle-house-dashboard',
  templateUrl: './cattle-house-dashboard.component.html',
  styleUrls: ['./cattle-house-dashboard.component.css']
})
export class CattleHouseDashboardComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }
  books: Book[] = [];
  ngOnInit(): void {
    this.books= this.bookService.getBooks();
  }

  deleteBook(book: Book){
    this.books = this.bookService.deleteBook(book);
  }

  addBook(){
    this.router.navigate(['addBook']);
  }
  updateBook(book: Book, index: number){
    console.log(book);
    this.bookService.setBookToUpdate(book,index);
    this.router.navigate(['updateBook']);
  }

  transfer(book: Book, index: number){
    console.log(book);
    this.bookService.setBookToUpdate(book,index);
    this.router.navigate(['transferLeather']);
  }
  viewBook(book: Book){
    console.log(book);
    this.bookService.setViewBook(book);
    this.router.navigate(['viewBook']);
  }
}
