import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-star',
  template: `<span class="star" [class.active]="active">&#9733;</span>`,
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
}
