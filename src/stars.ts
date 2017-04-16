import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AcStar } from './star';

@Component({
  selector: 'ac-stars',
  template: `
    <div class="stars">
      <ac-star
        *ngFor="let star of stars"
        [active]="star <= _rating"
        (rate)="onRate($event)"
        [position]="star"
      >
      </ac-star>
    </div>
  `,
  directives: [AcStar]
})
export class AcStars {
  @Input() starCount: number;
  @Input() rating: number;
  @Output() rate = new EventEmitter();
  stars:number[];
  _rating = this.rating;

  constructor() {
  }
  ngOnInit() {
    const count = this.starCount || 5;
    this.stars = Array.from(Array(count), (e, i) => i + 1);
  }

  onRate(star) {
    this.rate.emit(star);
    this._rating = star;
  }
}
