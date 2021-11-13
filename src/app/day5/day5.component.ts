import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {
  age: number = 18;
  constructor() { }
  label: string = '' ;
  ngOnInit(): void {
  }
  down(){
    this.age--;
  }
  up(){
    this.age++;
  }
}
