import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
  
  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService , private _Router:Router){}
isLoading:boolean=false;
errorMessage:string='';

  registerForm:FormGroup =new FormGroup({
    first_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    last_name:new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    password:new FormControl(null , [Validators.required  , Validators.minLength(8) ]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    role:new FormControl(null , [Validators.required]),
  })


  handleRegisterForm(registerForm:FormGroup){
    this.isLoading=true;
      this._AuthService.submitRegistration(registerForm.value).subscribe({
        next:(response)=>{
          if (response.status === 'SUCCESS') {
            this._Router.navigate(['/login'])
            this.isLoading=false;
          }
         // console.log(response);
          
        },
        error:(err)=>{
          console.log(err);
          this.isLoading=false;
          this.errorMessage=err.error.message;
        }
      })
    
  }

}
