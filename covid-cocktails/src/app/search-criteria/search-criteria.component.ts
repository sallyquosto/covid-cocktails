import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  cocktails: Cocktail[] = []

  constructor(private cocktailsservice: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsservice.getCocktail('Gin').subscribe((data: any) => {
      this.cocktails = data.drinks.map((drink: any) => {
        return {
          name: drink.strDrink,
          category: drink.strCategory,
          alcoholic: drink.strAlcoholic,
          instructions: drink.strInstructions
          
        }

        

      });
      console.log(this.cocktails);
    })
  }
  }
