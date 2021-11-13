import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, ViewChildren, QueryList, NgModule } from '@angular/core';
import { child2Component } from '../day6/child2.component';
import { child3Component } from '../day6/child3.component';
import { child1 } from './child/child1.component';
import { child2 } from './child/child2.component';
import { Child3 } from './child/child3.component';
// import {Day7Service} from './day7.service'
@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements AfterViewInit, OnInit {
  @ViewChild(child1) child1!: child1  ; 
  @ViewChild(child2) Child2! :child2  ;
  @ViewChild('nameRef')  nameElementRef! : ElementRef  ;
  abc: string = "ahaahahahah";
  isShowChild = false;
  child3Data!: number;
  @ViewChild(Child3) 
  set check(v: Child3) {
  if(this.isShowChild === true){
    this.child3Data = v.number; 
    this.runChildFunc();
  }
  }

  @ViewChildren("child") child!: QueryList<any>;
  constructor( 
    ){
  };

  ngOnInit(): void {
    // get data
    // this.DataService.GetData().then((data)=>{
    //   console.log(data)
    // })
  }
  ngAfterViewInit() {
    // this.nameElementRef.nativeElement.focus();
    // console.log(this.nameElementRef)  
    //  this.child3.changes.subscribe(()=> {
    //  })
   
  }

  runChildFunc() {
    this.child.map((e)=>{
     return e.run1();
   })
  }
  

changeHellocomp(){
  // this.child3.map(e =>{
  //   return e.run();
  // })
  this.child1.number++;
  // this.child1.run();
  this.Child2.focus(this.abc);
  // this.nameElementRef.nativeElement.value="hihi"
}


   
}
