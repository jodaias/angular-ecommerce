import { Router, Routes } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { OktaAuthGuard, OktaCallbackComponent } from "@okta/okta-angular";
import { Injector } from "@angular/core";

import { OrderHistoryComponent } from "./components/order-history/order-history.component";
import { MembersPageComponent } from "./components/members-page/members-page.component";
import { LoginComponent } from "./components/login/login.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CartDetailsComponent } from "./components/cart-details/cart-details.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

function sendToLoginPage(oktaAuth: OktaAuth, injector: Injector) {
  const router = injector.get(Router);
  if(!oktaAuth.isAuthenticated()){
    router.navigate(['/login']);
  }
}

export const APP_ROUTES: Routes = [
  {path: 'order-history', component: OrderHistoryComponent },

  {path: 'members', component: MembersPageComponent, canActivate: [OktaAuthGuard],
                    data: {onAuthRequired: sendToLoginPage} },

  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];
