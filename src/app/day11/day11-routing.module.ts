import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day11HomeComponent } from './home.component';
import { Day11Component } from './day11.component';
import { CommonModule } from '@angular/common';
import { AddComponent } from './child/add.component';
import { EditComponent } from './child/edit.component';

const day11Routes: Routes = [

 {
    path: '',
    component: Day11HomeComponent
}
,
{
  path: 'add',
  component: AddComponent
}
,
{
  path: 'edit/:id',
  component: EditComponent
}
,
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(day11Routes)],
  exports: [RouterModule]
})
export class Day11RoutingModule {
  
 }
