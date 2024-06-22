import { Component, Input } from '@angular/core';
import { Rating } from '../interface/postRating';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrl: './rating-list.component.scss',
})
export class ratings {
  @Input() ratings: Rating[] = [];
}
