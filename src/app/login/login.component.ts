import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) {

  }
  user = "";
  ngOnInit(): void {

  }


  register() {
    this.route.navigate(['register']);
  }
  home() {
    if (this.user == "Cattle House Operator") this.route.navigate(['cattle']);
    else
      this.route.navigate(['']);
  }


}
