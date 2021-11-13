import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AppService} from '../../app.service';
import {Location} from '@angular/common';
import {InterFaceData} from '../../app.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'edit',
    template: `
     <h2 class="text-center my-4">sửa</h2>
    <form class='container' [formGroup]="logForm" (ngSubmit)="onSubmit(logForm.value)" >
        <div class="form-group" >
        <label for="exampleInputId">id </label>
        <input type="number" class="form-control" id="exampleInputId"  formControlName="id"  >
        <div *ngIf="id?.invalid && id?.touched ">
          <p *ngIf="id?.errors?.required" class="text-danger">hãy điền id</p>
        </div>
      </div>
    <div class="form-group">
        <label for="exampleInputName1">name </label>
        <input type="text" class="form-control" id="exampleInputName1"   formControlName="name" value="aaaaa" >
        <div *ngIf="name?.invalid && name?.touched ">
          <p *ngIf="name?.errors?.required" class="text-danger">hãy điền tên</p>
          <p *ngIf="name?.errors?.minlength" class="text-danger">họ và tên có ít nhất 6 kí tự </p>
        </div>
      </div>
    <div class="form-group">
        <label for="exampleInput">title  </label>
        <input type="text" class="form-control" id="exampleInput"  formControlName="title" >
        <div *ngIf="title?.invalid && title?.touched ">
          <p *ngIf="title?.errors?.required" class="text-danger">hãy điền title</p>
         
        </div>
      </div>  
      <!-- nếu chưa đúng form không cho submit -->
      <button type="submit" class="btn btn-primary" [disabled]="!logForm.valid">lưu mới</button>
      <button type="submit" class="btn "> <a [routerLink]="'/day11'">Hủy</a> </button>
</form>`
})
export class EditComponent implements OnInit {
    data = {} as InterFaceData; 
 
    constructor(
        private router : ActivatedRoute,
        private DataService: AppService,
        private _location: Location
    ) { }
    logForm = new FormGroup({
        id: new FormControl(null,[
            Validators.required,
          ]),
        name: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
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
      get id(){
        return this.logForm.get('id');
      }
    titleId : number = 0;
    ngOnInit() {
        // 1 số cách lấy param
        this.router.paramMap.subscribe(params =>{
            this.titleId = Number(params.get('id'));
            this.DataService.GetDataId(this.titleId).then((data)  => {      
                // this.Users1 = data;
                this.data = data;  
               this.logForm.setValue({
                 id: this.data.id,
                 name: this.data.name,
                 title: this.data.title
               }) 
              })
              
        })
        // let A = this.router.snapshot.params;
        // console.log(A.id)
        // let B = this.router.snapshot.paramMap;
        // console.log(B.get('id'))
        
     }

     onSubmit(data:any){
        this.DataService.editData(data.id , data).then(data =>{
            this._location.back();    
        });
     }
}