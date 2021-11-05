import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'childDay6',
  template: `
 <div>
   <button (click)="up()">tăng thêm 1,000</button>
   {{number | cusTomPipe }}
   <button (click)="down()">giảm thêm 1,000</button>
</div>
  
  `,
  styles: ['']
})
export class childDay6Component {
  title = 'Angular';
  @Input() number!: number;
  @Output() changeNumer = new EventEmitter<number>();
  up(){
    this.change(1000)
  }
  down(){
    this.change(-1000)
  }
  change(val : number  ){
    this.number = Number(this.number)
    this.number = this.number + val
    this.changeNumer.emit(this.number);
    // console.log(this.number)
  }
}
