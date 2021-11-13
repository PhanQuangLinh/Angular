import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {comparePassword} from './custom.validators'
@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrls: ['./day8.component.css']
})
export class Day8Component implements OnInit {
 
  constructor() { }
  isForm1: boolean = true;
  isForm2: boolean = false;
  logForm = new FormGroup({
    Name: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^[A-Za-z0-9 ]+$')
    ]),
    Email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    Password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    Repassword: new FormControl('',[
      Validators.required,
      
    ]),
  }, comparePassword);
  get Name(): FormControl{
    return this.logForm.get('Name') as FormControl;
  }
  get Password(){
    return this.logForm.get('Password');
  }
  get Email(){
    return this.logForm.get('Email');
  }
  get Repassword(){
    return this.logForm.get('Repassword');
  }
  ngOnInit(): void {
   
  }
  onSubmit(a : any) {    
    console.log(a);
  }

  Forms1(){
   this.isForm1 = true;
   this.isForm2 = false;
  }
  Forms2(){
    this.isForm1 = false;
    this.isForm2 = true;
  }
}
