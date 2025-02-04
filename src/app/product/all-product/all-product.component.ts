import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';
import { CartService } from 'src/app/core/service/cart.service';
import { Book } from 'src/app/core/service/interface/user';
  
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit{
constructor(private _BooksService:BooksService , private _CartService:CartService){}
AllBooks:Book[]=[];
originalBooks: Book[] = [];
AllimageBooks:string[]=['assets/images/book.png' , 'assets/images/book3.png',
  'assets/images/book4.png' , 'assets/images/book5.png',
  'assets/images/book6.png' , 'assets/images/book7.png' ,
  'assets/images/booki1.jpg' , 'assets/images/booki2.jpg' ,
  'assets/images/booki5.jpg' , 'assets/images/booki6.jpg',
   'assets/images/booki4.jpg' ,  
    'assets/images/booki3.jpg' ,    'assets/images/book4.png' , 'assets/images/book5.png',
];


currentPage: number = 1;
pageSize: number = 12;
totalPages: number = 1;


ngOnInit(): void {
  this.getAllBooks()
}
 
getAllBooks(){
  this._BooksService.getAllBooks().subscribe({
    next:(response)=>{
      //console.log(response.data);
      //this.AllBooks=response.data;
      //console.log(this.AllBooks);
      this.originalBooks = response.data;
      this.totalPages = Math.ceil(this.originalBooks.length / this.pageSize);
      this.paginateBooks();
     
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

paginateBooks() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  const paginatedBooks = this.originalBooks.slice(startIndex, endIndex);

  // تحديث مصفوفة AllBooks أثناء دورة الصور
  this.AllBooks = paginatedBooks.map((book, index) => {
    return {
      ...book,
      image: this.AllimageBooks[(startIndex + index) % this.AllimageBooks.length],
    };
  });
}

goToPage(page: number) {
  if (page > 0 && page <= this.totalPages) {
    this.currentPage = page;
    this.paginateBooks();
  }
}


addToCart(book:string , quantity:number){
  this._CartService.addToCart(book , quantity).subscribe({
    next:(response)=>{
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}

}
