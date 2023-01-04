import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

userRole = "";
  constructor(private bookService: BookService, private route: Router) { }
  viewBook = this.bookService.getViewBook();
  books: Book[] = [];
  ngOnInit(): void {
    this.userRole = this.bookService.getUser();
  }
  qrscan() {

    this.route.navigate(['qrscan']);
  }

}
