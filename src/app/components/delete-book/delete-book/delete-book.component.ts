import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service'; 

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
      alert('Please enter a valid Book ID.');
    }
  }
}
