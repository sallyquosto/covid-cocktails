import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { PopularListComponent } from './popular-list/popular-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  {path:'', component: SearchCriteriaComponent},
  {path:'cocktail-list', component: CocktailListComponent},
  {path: 'popular-list', component: PopularListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*Compare code to GitHub before deletion for merge purposes*/