import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  home(){
    this.route.navigate(['']);
  }

  qrScan(){
    this.route.navigate(['qrscan']);
  }

  goToLogin(){
    this.route.navigate(['login']);
  }
  goToRegister(){
    this.route.navigate(['register']);
  }

}
