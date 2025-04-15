import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent {
  book: Book = { id: 0, title: '', authorName: '', price: 0, quantity: 0 };

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  onUpdate(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
