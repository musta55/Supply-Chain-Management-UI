import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { CattleHouseDashboardComponent } from './cattle-house-dashboard/cattle-house-dashboard.component';
import { LoginComponent } from './login/login.component';
import { QrscanComponent } from './qrscan/qrscan.component';
import { RegisterComponent } from './register/register.component';
import { TransferLeatherComponent } from './transfer-leather/transfer-leather.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'', component:BookListComponent},
  {path: 'books', component:BookListComponent},
  {path:'addBook', component:AddBookComponent},
  {path:'updateBook', component:UpdateBookComponent},
  {path:'viewBook', component:ViewBookComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'qrscan',component:QrscanComponent},
  {path:'cattle', component: CattleHouseDashboardComponent},
  {path: 'transferLeather',component: TransferLeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
