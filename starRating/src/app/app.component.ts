import { Component } from '@angular/core';
import { ratings } from './database/db';
import { Rating } from './interface/postRating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'starRating';

  ratings: Rating[] = ratings;
}
