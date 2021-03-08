import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RandomListComponent } from './random-list/random-list.component';

const routes: Routes = [
  {path:'', component: SearchCriteriaComponent},
  {path:'cocktail-list', component: CocktailListComponent},
  {path: 'popular-list', component: PopularListComponent},
  {path:'random-list', component: RandomListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }