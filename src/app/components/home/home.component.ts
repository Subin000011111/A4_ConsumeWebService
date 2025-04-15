import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  providers: [BookService]
})
export class HomeComponent {
  constructor(private bookService: BookService, private router: Router) {}

  deleteBookById(id: number): void {
    this.bookService.deleteBook(id).subscribe(() => {
      alert(`Book with ID ${id} deleted successfully.`);
      this.router.navigate(['/books']);
    });
  }
}
