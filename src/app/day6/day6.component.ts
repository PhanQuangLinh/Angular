import { Component, OnInit } from '@angular/core';
import {dataDay6Service} from './dataDay6.sevice'
@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {
  input: number = 1000  ;
  constructor(
    private service : dataDay6Service,
    ) { }

  ngOnInit(
      
  ): void {
  }
  change(val: number){
    this.input = val;
  }
  mess: string= "" ;

  dataChanged(text : string){
    this.service.changeMessage1(text);
    this.service.changeMessage2(text);
  }
  
}
