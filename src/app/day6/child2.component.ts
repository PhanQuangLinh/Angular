import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import {dataDay6Service} from './dataDay6.sevice'

@Component({
  selector: 'child2',
  template: `
 <div>
  {{checkMess}}
</div>
  
  `,
  styles: ['']
})
export class child2Component implements OnInit {
  title = 'Angular';
  checkMess!: string ;
  constructor(
    private service : dataDay6Service,
    ) { }

    ngOnInit() {
         this.service.currentMessage$.subscribe(msg =>{
            this.checkMess = msg
         }
           );
      }

}
