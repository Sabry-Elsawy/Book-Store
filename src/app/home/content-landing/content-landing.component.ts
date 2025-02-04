import { Component, OnInit  } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Book, category } from 'src/app/core/service/interface/user';
import { CategoriesService } from 'src/app/core/service/categories.service';
import { CartService } from 'src/app/core/service/cart.service';
  

@Component({
  selector: 'app-content-landing',
  templateUrl: './content-landing.component.html',
  styleUrls: ['./content-landing.component.scss']
})
export class ContentLandingComponent implements OnInit {
  constructor(private _BooksService: BooksService , private _CategoriesService:CategoriesService , private _CartService:CartService) {}
  AllImagesCategories:string[]=['assets/images/Rectangle 11 (1).png' , 'assets/images/Rectangle 11 (2).png' , 'assets/images/Rectangle 11.png',
    'assets/images/pexels-pixabay-289737.jpg' , 'assets/images/pexels-pixabay-301920.jpg',
    'assets/images/pexels-nietjuh-1809340.jpg' ,'assets/images/pexels-pixabay-289738.jpg' ,'assets/images/pexels-thought-catalog-317580-904616.jpg'
  ];
  AllimagesBooks:string[]=['assets/images/book.png' , 'assets/images/book7.png' , 'assets/images/book4.png' , 'assets/images/book5.png']
  AllBooks:Book[] = [];
  AllCategories:category[]=[];
  displayedCategories: category[] = [];
  showAll: boolean = false;
  itemsToShow: number = 3;
  ngOnInit(): void {
    this.getBookSlider();
    this.getAllCategories();
  }

  getBookSlider() {
    this._BooksService.getBooksSlider().subscribe({
      next: (response) => {
        this.AllBooks = response.data;
       // console.log(this.AllBooks);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="nav-btns nav-prev"> </span>',
      '<span class="nav-btns nav-next"> </span>'],
    responsive: {
      0: {
        items: 1,
        autoHeight: true,
      },
   
    },
    nav: true
  }



  getAllCategories(){
    this._CategoriesService.GetAllCatgory().subscribe({
      next:(response)=>{
        //console.log(response);
        this.AllCategories=response;
                this.displayedCategories = this.AllCategories.slice(0, this.itemsToShow);
        console.log(this.AllCategories);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    this.displayedCategories = this.showAll ? this.AllCategories : this.AllCategories.slice(0, this.itemsToShow);
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



// navText: ['<span class="nav-btns nav-prev"><i class="fa fa-chevron-left"></i></span>',
//   '<span class="nav-btns nav-next"><i class="fa fa-chevron-right"></i></span>'],