import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
 
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllProductComponent } from './all-product/all-product.component';
import { FooterpComponent } from './footerp/footerp.component';
import { MainNavpComponent } from './main-navp/main-navp.component';
  

@NgModule({
  declarations: [
   
    ProductComponent,
 
    NavBarComponent,
    SidebarComponent,
    AllProductComponent,
    FooterpComponent,
    MainNavpComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
     
  ]
})
export class ProductModule { }
