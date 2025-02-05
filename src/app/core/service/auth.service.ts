import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interface/user';
import { FormGroup } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
 
Data= new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }
  ngOnInit(): void {
    if(localStorage.getItem('userToken' ) !== null){
      this.userData()
    }
  }

// header:any={language:'en'}
  submitRegistration(formData:any):Observable<any>{
  return  this._HttpClient.post(`api/auth/register` , formData )
  }


  submitlogin(formData:any):Observable<any>{
    return  this._HttpClient.post(`api/auth/login` , formData )
    }

    userData(){
      let data:any = JSON.parse(  localStorage.getItem('userData') || '{}' )
      this.Data.next(data)
    }


}
