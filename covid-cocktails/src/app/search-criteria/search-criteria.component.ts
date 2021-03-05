import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {


  constructor(
    private cocktailsservice: CocktailsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  searchCocktail(drink: string) {
    this.cocktailsservice.getCocktail(drink).subscribe((data: any) => {
      this.setCocktail(data);
      this.router.navigateByUrl('/cocktail-list');
    });
  }

  setCocktail(data: any) {
    this.cocktailsservice.cocktails = data.drinks.map((drink: any) => {
      return {
        name: drink.strDrink,
        category: drink.strCategory,
        alcoholic: drink.strAlcoholic,
        instructions: drink.strInstructions
      }
    });
}

  }
