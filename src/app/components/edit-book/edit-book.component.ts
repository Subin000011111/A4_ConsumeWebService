import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { BookService } from '../../services/book.service'; 

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {
  id!: number;
  book: any = undefined;
  message: string = '';

  constructor(private bookService: BookService) {}

  fetchBook() {
    if (!this.id) {
      this.message = 'Please enter a valid Book ID.';
      return;
    }

    this.bookService.getBook(this.id).subscribe({
      next: (data) => {
        this.book = data;
        this.message = '';
      },
      error: () => {
        this.message = `Book with ID ${this.id} not found.`;
        this.book = undefined;
      }
    });
  }

  updateBook() {
    if (!this.book) return;

    this.bookService.updateBook(this.id, this.book).subscribe({
      next: () => {
        this.message = `Book with ID ${this.id} has been updated.`;
      },
      error: () => {
        this.message = `Failed to update book with ID ${this.id}.`;
      }
    });
  }
}
