import { Component, Input, Output, OnInit } from '@angular/core';
import { AcStar } from './star';
@Component({
  selector: 'ac-stars',
  template: `
    <div class="stars">
      <ac-star *ngFor="let star of stars"></ac-star>
    </div>
  `,
  directives: [AcStar]
})
export class AcStars implements OnInit {
  @Input() starCount: number;
  stars:number[] = [];
  rating:number = 0;

  ngOnInit() {
    this.stars = Array.apply(null, { length: this.starCount < 0? 5 : this.starCount })
    .map(Number.call, Number);
  }
}
