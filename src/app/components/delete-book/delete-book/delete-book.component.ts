import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-book.component.html'
})
export class DeleteBookComponent {
  bookId: number | null = null;
  book: Book | null = null;
  message: string = '';

  constructor(private bookService: BookService) {}

  fetchBook() {
    if (this.bookId != null) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (data) => {
          this.book = data;
          this.message = '';
        },
        error: () => {
          this.book = null;
          this.message = 'Book not found.';
        }
      });
    }
  }

  deleteBook() {
    if (this.bookId != null) {
      this.bookService.deleteBook(this.bookId).subscribe({
        next: () => {
          this.message = 'Book deleted successfully.';
          this.book = null;
          this.bookId = null;
        },
        error: () => {
          this.message = 'Failed to delete the book.';
        }
      });
    }
  }
}
