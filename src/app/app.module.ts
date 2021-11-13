import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { homeComponent } from './home.component';



@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CommonModule,
    HttpClientModule
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
