import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RandomListComponent } from './random-list/random-list.component';
import { RandomMixComponent } from './random-mix/random-mix.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'home', component: SearchCriteriaComponent},
  {path:'cocktail-list', component: CocktailListComponent},
  {path: 'popular-list', component: PopularListComponent},
  {path:'random-list', component: RandomListComponent},
  {path: 'cocktail-details', component: CocktailDetailsComponent},
  {path: 'popular-list', component: PopularListComponent},
  {path: 'random-mix', component: RandomMixComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }