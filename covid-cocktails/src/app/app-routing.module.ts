import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularListComponent } from './popular-list/popular-list.component'

const routes: Routes = [
  {path: 'popular-list', component: PopularListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
