import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomListComponent } from './random-list/random-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  {path: 'search-criteria', component: SearchCriteriaComponent},
  {path: 'random-list', component: RandomListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
