import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html'
})
export class AddBookComponent {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 1
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      console.log('Book created successfully!');
      this.router.navigate(['/books']); // redirect to list
    }, error => {
      console.error('Error creating book:', error);
    });
  }
}
