import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor(private bookservice: BookService, private route: Router) { }
  givenBook = this.bookservice.getBookToUpdate();
  ngOnInit(): void {
  }

  updateBook(){
    console.log(this.givenBook);
    this.bookservice.updateBook(this.givenBook);
    this.route.navigate(['']);
  }

}
