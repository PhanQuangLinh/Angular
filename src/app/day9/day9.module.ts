import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day9Component } from './day9.component';
import { ChildDay9Component } from './childDay9.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Day9Component,
    ChildDay9Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Day9Module { }
