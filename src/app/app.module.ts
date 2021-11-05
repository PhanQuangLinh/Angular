import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { childDay5Component } from './day5/childDay5.component';
import { Day5Component } from './day5/day5.component';
import { Day5Module } from './day5/day5.module';
import { homeComponent } from './home.component';
import { Day6Component } from './day6/day6.component';


@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
    
    // Day5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
