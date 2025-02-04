import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'' , redirectTo:'register' , pathMatch:'full'},
   {path:'register' , component:RegisterComponent},
   {path:'login' , component:LoginComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'Product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'Cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
 
   {path:'**' , component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
