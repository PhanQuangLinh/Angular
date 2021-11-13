import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day10Component } from './day10.component';
import {ChildComponent} from './child1/child.component'
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child1/child2.component';
import {Child3Component} from './child1/child3.component';
import {Child4Component} from './child1/child4.component';
import {Child5Component} from './child1/child5.component';
import {Day10Guard} from '../day10.guard'
import { Child6Component } from './child1/child6.component';
import { Child7Component } from './child1/child7.component';
const day10Routes: Routes = [
//  {
//      path: '',
//      component: Day10Component
//  }
// ,
 {
    path: 'child',
    component: ChildComponent
}
,
{
    path: 'child1',
    component: Child1Component,
    resolve: [Day10Guard]
}
,
{
    path: 'child2',
    component: Child2Component,
    canLoad: [Day10Guard],
}
,
{
    path: 'child3',
    component: Child3Component, 
    canActivateChild : [Day10Guard],
    children : [
        {
            path: 'child6',
            component: Child6Component,     
        },
        {
            path: 'child7',
            component: Child7Component,     
           
        },
    ] 
}
,
{
    path: 'child4',
    component: Child4Component,  
    canDeactivate: [Day10Guard]
}
,
{
    path: 'child5',
    component: Child5Component,  
    canActivate : [Day10Guard]
}
,
];

@NgModule({
  imports: [RouterModule.forChild(day10Routes)],
  exports: [RouterModule],
  providers :[Day10Guard]
})
export class Day10RoutingModule {
  
 }
