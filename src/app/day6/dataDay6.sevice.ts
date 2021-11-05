import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable(
    {providedIn: 'root'}
)
export class dataDay6Service {
    // asObservable() truy cập vào biến
    private subjects$ = new Subject<any>();
    current$ = this.subjects$.asObservable();
    
    private  messageSource$ = new BehaviorSubject('');
    currentMessage$: Observable<any> = this.messageSource$;
   

  constructor() { }

  changeMessage1(msg: any) {
    this.subjects$.next(msg);
  }

  changeMessage2(msg: string) {
    this.messageSource$.next(msg);
  }

}