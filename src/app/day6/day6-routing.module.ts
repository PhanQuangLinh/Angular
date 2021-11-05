import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day6Component } from './day6.component';

const day6Routes: Routes = [
 {
     path: '',
     component: Day6Component
 }
];

@NgModule({
  imports: [RouterModule.forChild(day6Routes)],
  exports: [RouterModule]
})
export class Day6RoutingModule {
  
 }
