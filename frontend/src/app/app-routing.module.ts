import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Screens
import { HomeComponent } from './screens/home/home.component';
import { CartComponent } from './screens/cart/cart.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { CheckoutComponent } from './screens/checkout/checkout.component';
import { CourseComponent } from './screens/course/course.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: HomeComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
