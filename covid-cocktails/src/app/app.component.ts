import { Component, OnInit } from '@angular/core';
import { CocktailsService } from './cocktails.service';
import { Cocktails } from './models/cocktails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covid-cocktails';
  cocktail: Cocktails[]= [];
  constructor(private cocktailsservice: CocktailsService) { }
  ngOnInit() {
    this.cocktailsservice.getCocktail('Gin').subscribe((data: any) => {
      this.cocktail = data.drinks;
      console.log(this.cocktail);
    })
  }
}
