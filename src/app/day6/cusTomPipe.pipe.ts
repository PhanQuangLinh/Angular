import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :'cusTomPipe'
})

export class cusTomPipe implements PipeTransform{
    transform(val:number ){
    //    return val.toString().replace(/(?=(\d{3})+(?!\d))/g ,',') + 'VNĐ'
    return val.toString().split('').reverse().reduce( (a : string,b :string,index : number): any =>{
               return ((index % 3) ? b : (b + ','))+ a
    })   
    }
}