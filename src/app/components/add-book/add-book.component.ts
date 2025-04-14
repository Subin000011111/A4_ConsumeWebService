import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      alert('Book added successfully!');
      this.router.navigate(['/books']);
    });
  }
}
