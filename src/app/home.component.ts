

import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <h2><a [routerLink]="['day5']">ngày thứ 5 :</a>  example ng-template ngTemplateOutlet</h2>
  <h2><a [routerLink]="['day6']">ngày thứ 6 :</a>   Input, Output, và service (Subject, BehaviorSubject, ...) và Custom pipe</h2>
  `,
  styles: ['']
})
export class homeComponent {
  title = 'Angular';
}
