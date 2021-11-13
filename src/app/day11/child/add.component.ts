import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {InterFaceData} from '../../app.model';
import {AppService} from '../../app.service';
import {Location} from '@angular/common';
@Component({
    selector: 'add',
    template: `
    <h2 class="text-center my-4">thêm mới</h2>
     <form class='container' [formGroup]="logForm" (ngSubmit)="onSubmit(logForm.value)">
        <div class="form-group">
            <label for="exampleInputName1">name</label>
            <input type="text" class="form-control" id="exampleInputName1"  placeholder="Name" formControlName="name">
            <div *ngIf="name?.invalid && name?.touched ">
              <p *ngIf="name?.errors?.required" class="text-danger">hãy điền tên</p>
              <p *ngIf="name?.errors?.minlength" class="text-danger">họ và tên có ít nhất 6 kí tự </p>     
            </div>
          </div>
        <div class="form-group">
            <label for="exampleInput">title </label>
            <input type="text" class="form-control" id="exampleInput" placeholder="title" formControlName="title">
            <div *ngIf="title?.invalid && title?.touched ">
              <p *ngIf="title?.errors?.required" class="text-danger">hãy điền title</p>    
            </div>
          </div>
          <!-- nếu chưa đúng form không cho submit -->
          <button type="submit" class="btn btn-primary" [disabled]="!logForm.valid">Submit</button>
          <button type="submit" class="btn "> <a [routerLink]="'/day11'">Hủy</a> </button>
    </form>
    `
})
export class AddComponent implements OnInit {
    constructor(private DataService: AppService,
        private _location: Location,) { }
    data: InterFaceData[] = [] ;
    ngOnInit() { }
    logForm = new FormGroup({   
        name: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
        //   Validators.pattern('^[A-Za-z0-9 ]+$')
        ]),
        title: new FormControl('',[
          Validators.required,
        ]),
      });
      get name(): FormControl{
        return this.logForm.get('name') as FormControl;
      } 
      get title(){
        return this.logForm.get('title');
      }
      onSubmit(data : InterFaceData) {    
      this.DataService.addData(data).then( data =>{
          console.log(data);
          this._location.back();    
      });
      }
}