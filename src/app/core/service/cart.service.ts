import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // header:any = { 
  //   'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  // };
  
  constructor(private _HttpClient:HttpClient) { }

  addToCart(book:string , quantity:number):Observable<any>{
    return this._HttpClient.post('api/basket/item' ,
      {book:book ,
        quantity:quantity
      }
      
    )
  }



  getMyBasket():Observable<any>{
   return this._HttpClient.get('https://upskilling-egypt.com:3007/api/basket'
    )
  }


  removeItem(book:string):Observable<any>{
    return this._HttpClient.delete(`https://upskilling-egypt.com:3007/api/basket/item/${book}`)
  }


  // updateProduct(book:string , quantity:number):Observable<any>{
  //   return this._HttpClient.put(`https://upskilling-egypt.com:3007/api/basket/${book}`,
  //     {  items: [
  //       {
  //           book:book ,
  //           quantity:quantity
  //       }
  //   ]}
  //   )
  // }

 
  
  


}



 