import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'landing' , component:LandingComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
