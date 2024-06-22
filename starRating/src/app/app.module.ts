import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ratings__item } from './rating/rating.component';
import { ratings__average } from './averge-rating/averge-rating.component';
import { ratings } from './rating-list/rating-list.component';

@NgModule({
  declarations: [AppComponent, ratings__item, ratings__average, ratings],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
