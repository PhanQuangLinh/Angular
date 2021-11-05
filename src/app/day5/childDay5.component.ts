import { Component, Input } from '@angular/core';

@Component({
  selector: 'childDay5',
  template: `

  <div> số tuổi của bạn là <ng-content select=".age"></ng-content> </div>
  <p> bạn muốn nói <ng-content select=".name"></ng-content><p>
 
  `,
  styles: ['']
})
export class childDay5Component {
  title = 'Angular';
  @Input() ages!: number;
}
