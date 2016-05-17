import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-star',
  template: `<span class="star" [class.active]="active" (click)="handleRate($event)">&#9733;</span>`,
  styles: [`
    .star {
      color: #efefef;
    }
    .star.active {
      color: yellow;
    }
  `]
})
export class AcStar {
  @Input() active;
  @Output() rate = new EventEmitter();

  handleRate(e) {
    this.rate.emit(e);
  }
}
