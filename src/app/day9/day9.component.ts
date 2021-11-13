import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChange,  } from '@angular/core';

@Component({
  selector: 'app-day9',
  templateUrl: './day9.component.html',
  styleUrls: ['./day9.component.css']
})
export class Day9Component implements OnInit, OnChanges,   DoCheck
 {
   number: number = 1;
   object: {[k: string]: any} = {key : 'aa'}
   arr : Array<any> = [1,2,3,4]
   checked: boolean = true;
   input1: string = '';
   input2: string = '';
  constructor() { 
    console.log('constructor');
  }
  ngOnChanges(changes:any){
    console.log('OnChanges', {changes});
    
  }
  ngOnInit(): void {
    // console.log('OnInit ');
  }

  ngDoCheck(){
    // console.log('DoCheck');
  }
  // // ngAfterViewInit(){
  // //   console.log('AfterViewInit');
  // // }
  // // ngAfterViewChecked(){
  // //   console.log('AfterViewChecked');
  // // }
  // ngOnDestroy(){
  //   console.log('OnDestroy');
  // }
  onClick(){
    this.checked = !this.checked
  }
  click(){
    this.number++;
    this.arr.push(5)
    this.object.key1 = "ad";
  }
}
