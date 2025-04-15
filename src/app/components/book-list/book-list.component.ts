import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  imports: [CommonModule]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

  deleteBook(id: number): void {
    if (confirm('Are you sure you want to delete this book?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks(); // Refresh list
      });
    }
  }

  editBook(id: number): void {
    this.router.navigate(['/edit', id]);
  }
}
