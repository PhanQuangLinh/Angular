import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'child3',
    template: `
    ccccccccccccccc
    <br/>
    child: 
    <a [routerLink]="['child6']">child1</a>   
    <a [routerLink]="['child7']">child2</a>  
    <br/> 
    <router-outlet></router-outlet>
    `
})

export class Child3Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}