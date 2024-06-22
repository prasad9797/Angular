import { Component, Input } from '@angular/core';
import { Rating } from '../interface/postRating';

@Component({
  selector: 'app-average-rating',
  templateUrl: './averge-rating.component.html',
  styleUrl: './averge-rating.component.scss',
})
export class ratings__average {
  @Input() ratings: { rate: number }[] = [];

  get stars() {
    const avgStar = this.avgStars();
    return Array(5)
      .fill(false)
      .map((_, index) => index < avgStar);
  }

  avgStars(): number {
    const result = this.ratings.reduce((acc, rating) => acc + rating.rate, 0);

    return result / this.ratings.length;
  }
}
