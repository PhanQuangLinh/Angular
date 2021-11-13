

import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <h2><a [routerLink]="['day5']">ngày thứ 5 :</a>  example ng-template ngTemplateOutlet</h2>
  <h2><a [routerLink]="['day6']">ngày thứ 6 :</a>   Input, Output, và service (Subject, BehaviorSubject, ...) và Custom pipe</h2>
  <h2><a [routerLink]="['day7']">ngày thứ 7 :</a>  xem hiểu ViewChild, ViewChildren , service</h2>
  <h2><a [routerLink]="['day8']">ngày thứ 8 :</a>  Tự tạo form với các input cần thiết </h2>
  <h2><a [routerLink]="['day9']">ngày thứ 9 :</a>   Thực hành với các Life cycle hooks </h2>
  <h2><a [routerLink]="['day10']">ngày thứ 10 :</a>  router </h2>
  <h2><a [routerLink]="['day11']">ngày thứ 11 :</a>  CRUD cho ứng dụng với HttpClient </h2>
  `,
  styles: ['']
})
export class homeComponent {
  title = 'Angular';
}
