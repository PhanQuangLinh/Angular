import { AbstractControl } from "@angular/forms";

export function comparePassword(c: AbstractControl) {
    
    const v = c.value;
    // console.log(v.Password === v.Repassword)
      return (v.Password === v.Repassword) ? null : {
        passwordnotmatch: true
      };
      
  }
  
