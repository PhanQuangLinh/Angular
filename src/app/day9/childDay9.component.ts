import { AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange,  } from '@angular/core';

@Component({
    selector: 'childDay9',
    template: `
    <h5>{{number}}
</h5>

<button (click)="onClick()">click</button>

    <!-- {{input1}}
    {{input2}} -->
`
})

export class ChildDay9Component implements OnInit, OnChanges,DoCheck, OnDestroy 
 {
     @Input() number!: number;
     @Input() object!: Object;
     @Input() arr!: Array<any>;
     @Input() set input1 (input1: any) {
      this.childFunction('input1' ,input1);
  }
     @Input() set input2 (input2: any) {
      this.childFunction('input2' ,input2);
      // this.childFunction2(input2);
  }
   checked: boolean = true;
  constructor() { console.log('child constructor'); }


  arr1!:Array<any> 
  ngOnChanges(changes:any){
  }
  ngOnInit(): void {
    // console.log('child OnInit');
  }
  ngDoCheck(){
    // console.log('child DoCheck');  
  }
  ngOnDestroy(){
    // console.log('child OnDestroy');
  }
  onClick(){
    this.number++;
    this.arr1 = [...this.arr] ;
    console.log(this.arr1)
  }
  childFunction(a:string ,b: any){
    
    console.log(a+':' + b )
  }
  // childFunction2(a : any){
  //   console.log('input2 có giá trị : ' + a)
  // }
}
