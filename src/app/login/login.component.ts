import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private bookService: BookService) {

  }
  user = "";
  ngOnInit(): void {

  }


  register() {
    this.route.navigate(['register']);
  }


  home() {
    this.bookService.setUser(this.user);
    // if (this.user == "Cattle House Operator") 
    // {
    //   this.route.navigate(['cattle']);
    // }
    // else
      this.route.navigate(['']);
  }


}
