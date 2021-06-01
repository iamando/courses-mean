import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotifierModule } from 'angular-notifier';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './screens/home/home.component';
import { CartComponent } from './screens/cart/cart.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { CheckoutComponent } from './screens/checkout/checkout.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CourseComponent } from './screens/course/course.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';

// Configuration
import { customNotifierOptions } from './config/notifierConfig';

// Environment
import { environment } from '../environments/environment';

// Store
import { reducers, metaReducers } from './app.store';

// Effects
import { CourseEffects } from './ngrx/effects/course.effects';
import { CartEffects } from './ngrx/effects/cart.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    SidebarComponent,
    CartItemComponent,
    ProfileComponent,
    CheckoutComponent,
    CourseItemComponent,
    CourseComponent,
    NotFoundComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(customNotifierOptions),
    FontAwesomeModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CourseEffects, CartEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
