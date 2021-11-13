import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1',
  template: `
 <p> child1: {{number}}  </p>
  `,
  styles: ['']
})
export class child1 {
   number: number = 0
   run1() {
     console.log(1)
   };
   
   run2() {
    console.log(2)
  };
   run3() {
    console.log(3)
  };
   run4() {
    console.log(4)
  };
   run5() {
    console.log(5)
  }; 
  run() {
    this.run1()
    this.run2()
    this.run3()
    this.run4()
    this.run5()

  };

  
}
