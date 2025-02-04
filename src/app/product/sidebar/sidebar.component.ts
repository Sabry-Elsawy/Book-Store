import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
showProductType=true;

toggleProducttype(){
  this.showProductType=! this.showProductType;
}
}
