import { Injectable } from '@angular/core';
import { Bag } from 'src/bag';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  userRole = "Cattle House Operator";
  books: Book[] = [{id:1001, name:"Samurai Cattle Farm",year:"1st january, 2023",color:"Red", availability:true},
  {id:1002, name:"Muhammad Cattle Farm",year:"1st january, 2023",color:"Black", availability:false},
  {id:1003, name:"SS Cattle Farm",year:"24th December, 2022",color:"Red", availability:true},
  {id:1004, name:"SD Cattle Farm",year:"2nd january, 2023",color:"White-black", availability:true},
  {id:1005, name:"Sadik Agro Farm",year:"1st january, 2023",color:"black", availability:true},
  {id:1006, name:"Golden harvest Agro",year:"2nd january, 2023",color:"Redish", availability:true},
  {id:1007, name:"Nahar Agro Farm",year:"2nd january, 2023",color:"White", availability:true},
  {id:1008, name:"Naba Cattle Farm",year:"2nd january, 2023",color:"Red", availability:true},
]



bags: Bag[] = [{id:1001, name:"ABC Footware House",year:"1st january, 2023",color:"Red", availability:true},
{id:1002, name:"Bagtime Italia - Fabbrica di borse",year:"1st january, 2023",color:"Black", availability:false},
{id:1003, name:"Footwear Manufacturer",year:"24th December, 2022",color:"Grey", availability:true},
{id:1004, name:"Bagify - Bag Production Centre",year:"2nd january, 2023",color:"White-black", availability:true},
]
  bookToUpdate = new Book();
  bookToUpdateIndex: any = 0;

  bookToView = new Book();
  constructor() { }

  ngOnInit(): void {
    if(this.userRole == "Cattle House Operator")
    {
    
    }

  }

  getUser(): string{
    return this.userRole;
  }
  
  setUser(givenUser: string){
    this.userRole = givenUser;
  }

  getBooks(): Book[]{
    return this.books;
  }
  getBags(): Book[]{
    return this.bags;
  }
  deleteBook(booktoDelete: Book): Book[]{
    this.books = this.books.filter((book)=>booktoDelete.id!=book.id);
    return this.books;
  }
  addBook(newBook: Book){
    this.books.push(newBook);
  }
  setBookToUpdate(updatedBook: Book, index: number){
    this.bookToUpdate = updatedBook;
    this.bookToUpdateIndex
     = index;
  }

  getBookToUpdate(): Book{
    return JSON.parse(JSON.stringify(this.bookToUpdate));
  }
  updateBook(givenBook: Book): Book[]{
    this.books.splice(this.bookToUpdateIndex,1,givenBook);
    return this.books;
  }

  setViewBook(givenBook: Book){
    this.bookToView = givenBook;
  }

  getViewBook(): Book{
    return JSON.parse(JSON.stringify(this.bookToView));
  }
}
