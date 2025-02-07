import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/service/books.service';
import { Book } from 'src/app/core/service/interface/user';
  

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
constructor(private _BooksService: BooksService) { }
AllBooks:Book[]=[];
AllimagesBooks:string[]=['assets/images/book.png' , 'assets/images/book7.png' , 'assets/images/book4.png' , 'assets/images/book5.png']
  ngOnInit(): void {
 this.getBooks();
  }

getBooks(){
 this._BooksService.getBooksSlider().subscribe({
  next:(responce)=>{
    console.log(responce);
    this.AllBooks=responce.data;
  },
  error:(err)=>{
    console.log(err);
    
  },
  complete:()=>{
    console.log('Done');
    
  }
 })
}

}
