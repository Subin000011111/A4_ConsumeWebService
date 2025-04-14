import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }

  onSubmit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.updateBook(id, this.book).subscribe(() => {
      alert('Book updated successfully!');
      this.router.navigate(['/books']);
    });
  }
}
