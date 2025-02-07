import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentLandingComponent } from './content-landing/content-landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
 
 
    
@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    MainNavbarComponent,
    FooterComponent,
    ContentLandingComponent,
    HeroComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    RouterModule,
 
   
   
 
  ],
 
})
export class HomeModule { }
