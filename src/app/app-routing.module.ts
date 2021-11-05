import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Day5Component} from './day5/day5.component';
import { homeComponent } from './home.component';
import { Day6Component } from './day6/day6.component';

const routes: Routes = [
  {
    path: '', component: homeComponent 
  },
  {
    path: 'day5', component: Day5Component ,
    loadChildren: () => import('./day5/day5.module').then(m => m.Day5Module)
  },
  {
    path: 'day6', component: Day6Component ,
    loadChildren: () => import('./day6/day6.module').then(m => m.Day6Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
