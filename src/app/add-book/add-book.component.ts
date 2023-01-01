import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService, private route: Router) { }

  ngOnInit(): void {
  }

  newBook = new Book();
  addBook(newBook: Book){
    this.bookService.addBook(newBook);
    this.route.navigate(['']);
  }



}
