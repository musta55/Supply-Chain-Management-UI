import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bag } from 'src/bag';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {

  userRole = "";

  constructor(private bookService: BookService, private router: Router) { }
  books: Book[] = [];
  bags: Bag[] = [];
  ngOnInit(): void {
    this.userRole = this.bookService.getUser();
    this.books = this.bookService.getBooks();
    this.bags = this.bookService.getBags();
  }

  deleteBook(book: Book) {
    this.books = this.bookService.deleteBook(book);
  }

  addBook() {
    this.router.navigate(['addBook']);
  }
  updateBook(book: Book, index: number) {
    console.log(book);
    this.bookService.setBookToUpdate(book, index);
    this.router.navigate(['updateBook']);
  }
  viewBook(book: Book) {
    console.log(book);
    this.bookService.setViewBook(book);
    this.router.navigate(['viewBook']);
  }

  viewBag(bag: Bag) {
    console.log(bag);
    this.bookService.setViewBook(bag);
    this.router.navigate(['viewBook']);
  }

  transfer(book: Book, index: number) {
    console.log(book);
    this.bookService.setBookToUpdate(book, index);
    this.router.navigate(['transferLeather']);
  }


}
