import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import {dataDay6Service} from './dataDay6.sevice'

@Component({
  selector: 'child3',
  template: `
 <div>
  {{checkMess}}
</div>
  
  `,
  styles: ['']
})
export class child3Component implements OnInit {
  title = 'Angular';
  checkMess!: string | number;
  constructor(
    private service : dataDay6Service,
    ) { }

    ngOnInit() {
         this.service.current$.subscribe(msg =>{
            this.checkMess = msg
         }
           );
      }

}
