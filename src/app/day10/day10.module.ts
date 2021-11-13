import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day10Component } from './day10.component';
import { Day10RoutingModule } from './day10-routing.module';
import {Day10Guard} from '../day10.guard'
import {ChildComponent} from './child1/child.component';
import {Child1Component} from './child1/child1.component';
import {Child2Component} from './child1/child2.component';
import { Child3Component } from './child1/child3.component';
import { Child4Component } from './child1/child4.component';
import { Child5Component } from './child1/child5.component';
import { Child6Component } from './child1/child6.component';
import { Child7Component } from './child1/child7.component';

@NgModule({
  declarations: [
    Day10Component,
    ChildComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    Child5Component,
    Child6Component,
    Child7Component
  ],
  imports: [
    CommonModule,
    Day10RoutingModule
  ],
  providers: [
    Day10Guard
  ],
})
export class Day10Module { }
