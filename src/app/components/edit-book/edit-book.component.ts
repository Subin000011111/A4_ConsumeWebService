import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  imports: [CommonModule, FormsModule]
})
export class EditBookComponent implements OnInit {
  book: Book = {
    id: 0,
    title: '',
    authorName: '',
    price: 0,
    quantity: 1
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(data => {
      this.book = data;
    });
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book.id!, this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
