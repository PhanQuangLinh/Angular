import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day8Component } from './day8.component';
import { Day8RoutingModule } from './day8-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form2Component } from './form2.component';




@NgModule({
  declarations: [
    Day8Component,
    Form2Component
   
  ],
  imports: [
    CommonModule,
    Day8RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Day8Module { }
