import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BookDetailsComponent implements OnInit {
  book: Book | null = null;

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }
}
