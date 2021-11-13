import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InterFaceData} from '../app.model'
import {AppService} from '../app.service'
@Component({
    selector: 'day11Home',
    template: `

        <h2 class="text-center my-2">Dữ liệu</h2>

<table class="table text-center">
    <thead >
        <tr>
            <th  scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">title</th>
            <th scope="col"><a [routerLink]="'add'">thêm</a></th>
        </tr>
    </thead>
    <tbody>
   
    <div *ngIf="isLoad">loading...</div>
        <tr *ngFor="let item of User">
            <th>{{item.id}}</th>
            <th>{{item.name}}</th>
            <th>{{item.title}}</th>
            <th><button class="btn" (click)="deleteid(item.id)">Xóa</button>
            <button><a [routerLink]="'edit/' + item.id">Sửa</a></button>
        </th>
        </tr>
    </tbody>
   
</table>
    `

})

export class Day11HomeComponent implements OnInit {
    User: InterFaceData[] = [] ;
     isLoad: boolean = false;
    constructor(
        private DataService: AppService,
        private router : ActivatedRoute
    ) {
        // this.User = this.router.snapshot.data['day11'];
        
     }
   
  async ngOnInit() {
      
    this.isLoad = true;
    let A = await this.DataService.GetData().then((data)  => {      
            this.User = data
            this.isLoad = false;
            // data.map(i => this.User.push(i))         
          })
          
     }

     deleteid(id : number){
         console.log(id)
         this.DataService.deleteData(id).then(() => {
            this.User = this.User.filter(function(val: any){
              return val.id != id;
            })      
          })
     }
}