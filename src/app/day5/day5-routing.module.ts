import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day5Component } from './day5.component';

const day5Routes: Routes = [
 {
     path: '',
     component: Day5Component
 }
];

@NgModule({
  imports: [RouterModule.forChild(day5Routes)],
  exports: [RouterModule]
})
export class Day5RoutingModule { }
