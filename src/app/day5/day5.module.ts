import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Day5Component } from './day5.component';
import { childDay5Component } from './childDay5.component';
import { Day5RoutingModule } from './day5-routing.module';


@NgModule({

  declarations: [
    Day5Component,
   childDay5Component

  ],
  imports: [
    CommonModule,
    Day5RoutingModule,
    
  ],
  exports: [

  ],
  providers: [
  ]
  
})
export class Day5Module { }
