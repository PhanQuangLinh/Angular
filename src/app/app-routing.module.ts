import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Day5Component} from './day5/day5.component';
import { homeComponent } from './home.component';
import { Day6Component } from './day6/day6.component';
import {Day7Component} from './day7/day7.component';
import {Day8Component} from './day8/day8.component';
import {Day9Component} from './day9/day9.component';
import {Day10Component} from './day10/day10.component'
import { environment } from 'src/environments/environment';
import {Day10Guard} from './day10.guard'
import {Day11Component} from './day11/day11.component'
import { dataResolver } from './resolver.service';
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
  {
    path: 'day7', component: Day7Component ,
    canLoad: [Day10Guard],
    loadChildren: () => import('./day7/day7.module').then(m => m.Day7Module)
  },
  {
    path: 'day8', component: Day8Component ,
    loadChildren: () => import('./day8/day8.module').then(m => m.Day8Module)
  },
  {
    path: 'day9', component: Day9Component ,
    loadChildren: () => import('./day9/day9.module').then(m => m.Day9Module)
  },
  {
    path: 'day10', component: Day10Component ,
    loadChildren: () => import('./day10/day10.module').then(m => m.Day10Module)
  },
  {
    path: 'day11', component: Day11Component ,
    resolve: [dataResolver],
    loadChildren: () => import('./day11/day11.module').then(m => m.Day11Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {enableTracing :!environment.production}