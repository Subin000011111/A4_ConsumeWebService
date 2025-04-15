import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../services/book.service';


@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './delete-book.component.html'
})
export class DeleteBookComponent {
  bookId: number | undefined;

  bookService = inject(BookService);  // ✅ Correct DI using inject()

  deleteBook(): void {
    if (this.bookId !== undefined && !isNaN(this.bookId)) {
      this.bookService.deleteBook(this.bookId).subscribe(() => {
        alert(`Book with ID ${this.bookId} deleted successfully.`);
        this.bookId = undefined;
      });
    } else {
      alert('Please enter a valid Book ID.');
    }
  }
}
