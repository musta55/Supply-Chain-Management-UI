import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QrscanComponent } from './qrscan/qrscan.component';
import { CattleHouseDashboardComponent } from './cattle-house-dashboard/cattle-house-dashboard.component';
import { TransferLeatherComponent } from './transfer-leather/transfer-leather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookListComponent,
    AddBookComponent,
    UpdateBookComponent,
    ViewBookComponent,
    LoginComponent,
    RegisterComponent,
    QrscanComponent,
    CattleHouseDashboardComponent,
    TransferLeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
