import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [{id:1001, name:"Samurai Cattle Farm",year:"1st january, 2023",color:"Red", availability:true},
  {id:1002, name:"Muhammad Cattle Farm",year:"1st january, 2023",color:"Black", availability:false},
  {id:1003, name:"SS Cattle Farm",year:"24th December, 2022",color:"Red", availability:true},
  {id:1004, name:"SD Cattle Farm",year:"2nd january, 2023",color:"White-black", availability:true},
]

  bookToUpdate = new Book();
  bookToUpdateIndex: any = 0;

  bookToView = new Book();
  constructor() { }

  getBooks(): Book[]{
    return this.books;
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
    this.bookToUpdateIndex = index;
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
