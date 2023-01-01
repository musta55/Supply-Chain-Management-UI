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

  
  constructor(private bookservice: BookService, private route: Router) { }
  viewBook = this.bookservice.getViewBook();
  ngOnInit(): void {
  }

  
}
