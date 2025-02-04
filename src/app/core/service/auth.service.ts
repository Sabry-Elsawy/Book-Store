import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './interface/user';
import { FormGroup } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
basUrl:string='https://upskilling-egypt.com:3007';
Data= new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }
  ngOnInit(): void {
    if(localStorage.getItem('userToken' ) !== null){
      this.userData()
    }
  }

header:any={language:'ar'}
  submitRegistration(formData:any):Observable<any>{
  return  this._HttpClient.post(`${this.basUrl}/api/auth/register` , formData,
    {headers:this.header}
  )
  }


  submitlogin(formData:any):Observable<any>{
    return  this._HttpClient.post(`${this.basUrl}/api/auth/login` , formData,
      {headers:this.header}
    )
    }

    userData(){
      let data:any = JSON.stringify(  localStorage.getItem('userData'))
      this.Data.next(data)
    }


}
