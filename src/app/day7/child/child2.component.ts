import { Component, Input } from '@angular/core';

@Component({
  selector: 'child2',
  template: `
 <p> child2: {{title}}  </p>
 
  `,
  styles: ['']
})
export class child2 {
  title:string = '';
 focus(val: string) {
    
    this.title = val; 
   
}

run1() {
  console.log(2)
}

}
