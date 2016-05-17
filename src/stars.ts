import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AcStar } from './star';


@Component({
  selector: 'ac-stars',
  template: `
    <div class="stars">
      <ac-star
        *ngFor="let star of stars; let i=index + rating"
        [active]="i < rating"
        (rate)="onRate($event)"
      >
      </ac-star>
    </div>
  `,
  directives: [AcStar]
})
export class AcStars implements OnInit {
  @Input() starCount: number;
  @Input() rating: number;
  @Output() rate = new EventEmitter();
  stars:number[] = [];
  
  onRate(count: number) {
    this.rate.next(count);
  }
  
  ngOnInit() {
    this.stars = Array.apply(null, { length: this.starCount < 0? 5 : this.starCount })
    .map(Number.call, Number);
  }
}
