import { Component, ElementRef, OnInit, ViewChild , AfterViewInit} from '@angular/core';

@Component({
    selector: 'form2',
    template: `
    <form  (ngSubmit)="f.form.valid && onSubmit(f.value)" #f="ngForm">
    <h4 class="text-center my-4">Template Driven Form</h4>
    <div class="form-group">
            <label for="exampleInputName1">Name</label>
            <input type="text" class="form-control" id="exampleInputName1"  placeholder="Name" #name="ngModel" name="name" [(ngModel)]="login.name"
            required minlength="6" pattern="^[A-Za-z0-9 ]+$"
            >
            <div *ngIf="f.submitted && name.invalid">
                        <span class="text-danger" role="alert" *ngIf="name.errors?.required">
                    name is require?
                  </span>
                        <span class="text-danger" *ngIf="name?.errors?.minlength ">
                    name ít hơn 6 kí tự
                  </span>
                        <span class="text-danger" *ngIf="name?.errors?.name">k phải name</span>
                        <span class="text-danger" role="alert" *ngIf="name.errors?.pattern">
                          name có kí tự đặc biệt
                  </span>
            </div>
          </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email </label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" #email="ngModel" name="email" [(ngModel)]="login.email"
            required email
            >
            <div *ngIf="f.submitted && email.invalid">
                        <span class="text-danger" role="alert" *ngIf="email.errors?.required">
                        email is require?
                  </span>
                        <span class="text-danger" *ngIf="email?.errors?.email ">
                  không phải email
                  </span>
                        
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" #pass="ngModel" name="pass" [(ngModel)]="login.pass"
            required minlength="6"
            > 
            <div *ngIf="f.submitted && pass.invalid">
                        <span class="text-danger" role="alert" *ngIf="pass.errors?.required">
                    pass is require?
                  </span>
                        <span class="text-danger" *ngIf="pass?.errors?.minlength ">
                    pass ít hơn 6 kí tự
                  </span>
            </div>         
           
          </div>
          <div class="form-group">
            <label for="exampleInputRepassword">Repassword </label>
            <input type="password" class="form-control" id="exampleInputRepassword1" placeholder="Repassword" #aaaa #rePass="ngModel" name="rePass" [(ngModel)]="login.rePass"
            required >
            <div *ngIf="f.submitted && rePass.invalid">
            <span class="text-danger" role="alert" *ngIf="rePass.errors?.required">
                    rePass is require?
            </span>
            </div>  
            <span class="text-danger" *ngIf="ischeck && login.pass !== login.rePass && rePass.touched">{{errorMess}}</span>     
          </div>
         
          <button  type="submit" class="btn btn-primary"
          (click)="check()"
          >Submit</button>
 
    </form>
    `
})

export class Form2Component implements OnInit {
    login : any = {
        name : "",
        email : "",
        pass: "",
        rePass: "",
      }
      
      ischeck: boolean = false;
      errorMess: string = 'nhập lại mật khẩu';
  
    constructor() { }
    
    ngOnInit() { }
    onSubmit(a : any){
        this.check();
        console.log(a)
    }
    check(){
        if(this.login.pass !== this.login.rePass){   
            this.ischeck = true;
            return false;
        }else{
            this.ischeck = false;
            return true;
        }
    }
}