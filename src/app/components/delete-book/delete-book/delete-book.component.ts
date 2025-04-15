import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DeleteBookComponent {
  bookId: number | undefined;
  message: string = '';

  constructor(private bookService: BookService) {}

  deleteBook(): void {
    if (!this.bookId) {
      this.message = 'Please enter a valid ID.';
      return;
    }

    this.bookService.deleteBook(this.bookId).subscribe({
      next: () => {
        this.message = `Book with ID ${this.bookId} has been deleted.`;
        this.bookId = undefined;
      },
      error: () => {
        this.message = `Book with ID ${this.bookId} could not be found.`;
      }
    });
  }
}
