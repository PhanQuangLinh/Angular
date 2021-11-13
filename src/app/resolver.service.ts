import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InterFaceData } from "./app.model";
import {AppService} from './app.service';

@Injectable({ providedIn: 'root' })

export class dataResolver implements Resolve<any> {
    constructor(private DataService: AppService,) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
       return this.DataService.GetData().then(data => {
           data.map(e => {
               if(e.name === 'aaaaaaa'){
                   console.log(e)
                   return false;      
               }else {
                   return true;
               }
           })
       }) ;
    }
}