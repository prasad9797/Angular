import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../interface/post.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-postcard',
  templateUrl: './post.card.component.html',
  styleUrl: './post.card.component.scss',
})
export class PostCardComponent {
  @Input() post!: Post;
  @Input() isClicked!: boolean;

  @Output() onClick = new EventEmitter<{ id: number; color: string }>();

  select() {
    this.onClick.emit({ id: this.post.id, color: this.post.buttonColor });
  }

  cardStyles() {
    return {
      'border-color': this.isClicked ? this.post.buttonColor : 'transparent',
      'box-shadow': this.isClicked
        ? `7px 7px 5px 0px ${this.post.buttonColor}`
        : 'none',
    };
  }
}
