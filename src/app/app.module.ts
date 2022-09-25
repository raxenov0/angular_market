import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { LcComponent } from './components/lc/lc.component';
import { AuthComponent} from "./pages/auth/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { BasketComponent} from "./pages/basket/basket.component";
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    LcComponent,
    AuthComponent,
    ProductComponent,
    FilterProductPipe,
    BasketComponent,
    ShopPageComponent,
    ModalWindowComponent,
    LoaderComponent,
    CreateModalComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
