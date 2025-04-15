import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },             
  { path: 'books', component: BookListComponent },
  { path: 'add', component: AddBookComponent },
  { path: 'edit/:id', component: EditBookComponent },
  
];