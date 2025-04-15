import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-book.component.html'
})
export class DeleteBookComponent {
  bookId: number | undefined;

  constructor(private bookService: BookService) {}

  deleteBook() {
    if (this.bookId) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        alert(`Book with ID ${this.bookId} deleted successfully.`);
        this.bookId = undefined;
      });
    } else {
      alert("Please enter a valid Book ID.");
    }
  }
}
