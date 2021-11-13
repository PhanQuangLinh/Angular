import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterFaceData } from "./app.model";
@Injectable({providedIn: 'root'})
export class AppService {
    API = `https://6172306261ed900017c406a6.mockapi.io/api/test`;
    constructor(private http: HttpClient) {
    }
    GetData(): Promise<InterFaceData[]>
     {
      return this.http.get<any>(this.API).toPromise();
     };
     GetDataId(id: number): Promise<InterFaceData>
     {
      return this.http.get<any>(this.API  + '/' + id).toPromise();
     };
     deleteData(id:  number): Promise<InterFaceData>{
        console.log(id)
       return this.http.delete<any>(this.API + '/' + id).toPromise();
     };

     addData(data: InterFaceData) :Promise<InterFaceData>
     {    
         return this.http.post<any>(this.API, data).toPromise();
     };
     editData(id: number , data:InterFaceData) :Promise<InterFaceData>
     {
      return this.http.put<any>(this.API + '/' + id, data).toPromise();
     };
}