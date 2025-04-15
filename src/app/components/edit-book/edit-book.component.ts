import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {
  bookId: number | null = null;
  book: Book | null = null;
  message = '';

  constructor(private bookService: BookService) {}

  fetchBook() {
    if (this.bookId != null) {
      this.bookService.getBookById(this.bookId).subscribe({
        next: (data: Book) => {
          this.book = data;
          this.message = '';
        },
        error: () => {
          this.message = 'Book not found';
          this.book = null;
        }
      });
    }
  }

  updateBook() {
    if (this.book) {
      this.bookService.updateBook(this.book.id!, this.book).subscribe({
        next: () => {
          this.message = 'Book updated successfully';
        },
        error: () => {
          this.message = 'Error updating book';
        }
      });
    }
  }
}