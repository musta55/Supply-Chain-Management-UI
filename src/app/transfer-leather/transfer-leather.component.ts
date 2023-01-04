import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-transfer-leather',
  templateUrl: './transfer-leather.component.html',
  styleUrls: ['./transfer-leather.component.css']
})
export class TransferLeatherComponent implements OnInit {

 
  constructor(private bookservice: BookService, private route: Router) { }
  userRole = "";
  givenBook = this.bookservice.getBookToUpdate();
  ngOnInit(): void {
    this.userRole =  this.bookservice.getUser();
  }

  updateBook(){
    console.log(this.givenBook);
    this.bookservice.updateBook(this.givenBook);
    this.route.navigate(['']);
  }
}
