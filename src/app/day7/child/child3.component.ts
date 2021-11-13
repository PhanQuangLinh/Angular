import { Component, Input } from '@angular/core';

@Component({
  selector: 'child3',
  template: `
     {{number}}
 
  `,
  styles: ['']
})
export class Child3 {
  title:string = '';
  number: number = 1;
  run(){
    console.log('1');
    this.number++;
  }
   
  run1(){
    console.log(3)
  }
}