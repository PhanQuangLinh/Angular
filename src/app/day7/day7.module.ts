import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day7Component } from './day7.component';
import { child1 } from './child/child1.component';
import { child2 } from './child/child2.component';
import { Child3 } from './child/child3.component';
import { HttpClientModule } from '@angular/common/http';
// import { Day7Service } from './day7.service';
import { Day7RoutingModule } from './day7-routing.module';




@NgModule({
  declarations: [
    Day7Component,
    child1,
    child2,
    Child3,
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Day7RoutingModule
  ],
  providers: [],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
 
})
export class Day7Module { }
