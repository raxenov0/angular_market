import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasketComponent} from "./pages/basket/basket.component";
import {ShopPageComponent} from "./pages/shop-page/shop-page.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {ProductsGuard} from "./guards/products.guard";

const routes: Routes = [
  {
    path:'shop',
    component:ShopPageComponent,
    canActivate: [ProductsGuard],
  },
  {
    path:'basket',
    component:BasketComponent,
    canActivate: [ProductsGuard],
  },
  {path:'auth', component:AuthComponent},
  {path:' ', component:AuthComponent},
  {path:'**', component:AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
