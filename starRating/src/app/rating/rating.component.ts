import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class ratings__item {
  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;

  get stars() {
    return Array(5)
      .fill(false)
      .map((_, index) => index < this.rate);
  }
}
