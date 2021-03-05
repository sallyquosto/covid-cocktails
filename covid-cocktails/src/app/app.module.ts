import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RandomListComponent } from './random-list/random-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RandomListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
