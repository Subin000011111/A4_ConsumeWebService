import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {
  book: Book = {
    title: '',
    author: '',
    price: 0,
    quantity: 0
  };

  message: string = '';

  constructor(private bookService: BookService) {}

  addBook() {
    if (!this.book.title || !this.book.author) {
      this.message = 'Please fill all required fields';
      return;
    }
  
    this.bookService.addBook(this.book).subscribe({
      next: () => {
        this.message = 'Book added successfully';
        this.book = { title: '', author: '', price: 0, quantity: 0 };
      },
      error: (err) => {
        console.error(err);
        this.message = 'Error adding book';
      }
    });
  }
}