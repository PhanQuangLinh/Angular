import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day7Component } from './day7.component';

const day7Routes: Routes = [
 {
     path: '',
     component: Day7Component
 }
];

@NgModule({
  imports: [RouterModule.forChild(day7Routes)],
  exports: [RouterModule]
})
export class Day7RoutingModule {
  
 }
