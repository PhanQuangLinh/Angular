import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day6Component } from './day6.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { cusTomPipe } from './cusTomPipe.pipe';
import { childDay6Component } from './childDay6.component';
import {HttpClientModule} from '@angular/common/http'
import { child2Component } from './child2.component';
import { child3Component } from './child3.component';



@NgModule({
  declarations: [
    Day6Component,
    cusTomPipe,
    childDay6Component,
    child2Component,
    child3Component
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: []
})
export class Day6Module { }
