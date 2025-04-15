import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  standalone: true
})
export class EditBookComponent {
  id?: number;
  book?: Book;
  message = '';

  constructor(private bookService: BookService, private router: Router) {}

  fetchBook() {
    if (!this.id) {
      this.message = 'Please enter a valid ID.';
      return;
    }

    this.bookService.getBook(this.id).subscribe({
      next: (data) => {
        this.book = data;
        this.message = '';
      },
      error: () => {
        this.message = 'Book not found!';
      }
    });
  }

  updateBook() {
    if (this.book && this.id) {
      this.bookService.updateBook(this.id, this.book).subscribe(() => {
        this.message = 'Book updated successfully.';
        setTimeout(() => this.router.navigate(['/book-list']), 1500);
      });
    }
  }
}
