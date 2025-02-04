import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _HttpClient:HttpClient) { }

  getBooksSlider():Observable<any>{
    return this._HttpClient.get('https://upskilling-egypt.com:3007/api/book?limit=4')
  }

  getAllBooks():Observable<any>{
    return this._HttpClient.get('https://upskilling-egypt.com:3007/api/book?limit=61')
  }
 
}
