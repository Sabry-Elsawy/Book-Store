 import { Component  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/service/auth.service';
import { Router } from '@angular/router';
   
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 constructor(private _AuthService:AuthService , private _Router:Router){}
 isloading:boolean=false;
  loginForm:FormGroup =new FormGroup({
    password:new FormControl(null , [Validators.required  , Validators.minLength(8) ]),
    email:new FormControl(null , [Validators.required , Validators.email]),
  })


  handleLogin(loginForm:FormGroup){
    this.isloading=true;
    //console.log(loginForm);
    this._AuthService.submitlogin(loginForm.value).subscribe({
      next:(response)=>{
        console.log(response);
        if (response.status === 'SUCCESS') {
          localStorage.setItem('userToken' , response.data.accessToken)
          localStorage.setItem('userData' , JSON.stringify( response.data.profile))
          this._AuthService.userData()
          this.isloading=false;
          this._Router.navigate(['/home/landing'])
        }
      },
      error:(err)=>{
        console.log(err);
        this.isloading=false;
      }
    })
  }



}
