import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingCategoryComponent } from './components/shopping-category/shopping-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterOptionSideBarComponent } from './components/filter-option-side-bar/filter-option-side-bar.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CartItemComponent } from './components/cart-items/cart-item/cart-item.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
    MenuBarComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCategoryComponent,
    ProductDetailsComponent,
    FilterOptionSideBarComponent,
    CartItemsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
