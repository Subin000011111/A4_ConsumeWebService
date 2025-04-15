import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  message: string = '';

  constructor(private bookService: BookService) {}

  addBook(): void {
    if (!this.book.title || !this.book.authorName) {
      this.message = 'Please fill all required fields.';
      return;
    }

    this.bookService.createBook(this.book).subscribe({
      next: () => {
        this.message = 'Book added successfully!';
        this.book = { title: '', authorName: '', price: 0, quantity: 0 };
      },
      error: () => {
        this.message = 'Failed to add book.';
      }
    });
  }
}
