import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { FormsModule } from '@angular/forms';
import { PopularListComponent } from './popular-list/popular-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    PopularListComponent
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
