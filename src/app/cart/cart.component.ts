import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { cartBook } from '../core/service/interface/user';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService){}

productCart:cartBook[]=[]

ngOnInit(): void {
  this.getMyBasket();
}


getMyBasket(){
  this._CartService.getMyBasket().subscribe({
    next:(response)=>{
      console.log(response.items);
      this.productCart=response.items
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
removeItem(book:string){
  this._CartService.removeItem(book).subscribe({
    next:(response)=>{
      console.log(response);
      this.productCart=response.items
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
// updateProduct(book:string , quantity:number){
//   this._CartService.updateProduct(book , quantity).subscribe({
//     next:(response)=>{
//       console.log(response);
//      // this.productCart=response.items
//     },
//     error:(err)=>{
//       console.log(err);
      
//     }
//   })
// }

}
