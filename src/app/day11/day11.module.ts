import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day11Component } from './day11.component';
import { Day11RoutingModule } from './day11-routing.module';
import { Day11HomeComponent } from './home.component';
import { AddComponent } from './child/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './child/edit.component';




@NgModule({
  declarations: [
    Day11Component,
    Day11HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    Day11RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Day11Module { }
