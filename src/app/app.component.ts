import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <h2>Consume Book WebServices</h2>
      <ul>
        <li><a routerLink="/books">Book List</a></li>
        <li><a routerLink="/add">Add a Book</a></li>
      </ul>
      <router-outlet></router-outlet>
      <br />
      <p>Subin Samuel | 991753006</p>
    </div>
  `
})
export class AppComponent {}
