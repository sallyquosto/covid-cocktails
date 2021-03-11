import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RandomListComponent } from './random-list/random-list.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { RandomMixComponent } from './random-mix/random-mix.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RandomListComponent,
    PopularListComponent,
    CocktailListComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CocktailDetailsComponent,
    RandomMixComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(router: Router){}
  
}

