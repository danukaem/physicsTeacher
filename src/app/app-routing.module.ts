import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ShoppingCategoryComponent} from './components/shopping-category/shopping-category.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {FilterOptionSideBarComponent} from './components/filter-option-side-bar/filter-option-side-bar.component';
import {CartItemsComponent} from './components/cart-items/cart-items.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'menuBar', component: MenuBarComponent},
  {path: 'navBar', component: NavBarComponent},
  {path: 'sideBar', component: SideBarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignupComponent},
  {path: 'shoppingCategory', component: ShoppingCategoryComponent},
  {path: 'productDetails', component: ProductDetailsComponent},
  {path: 'filterOptionSideBar', component: FilterOptionSideBarComponent},
  {path: 'cartItems', component: CartItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
