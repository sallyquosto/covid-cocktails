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
  cocktails: Cocktail[] = []
  ingredient: any
  glass: any;
  alcoholic: any;
  drinks: any;
  ingredientSelected: any;
  glassSelected: any;
  alcoholicSelected: any;

  constructor(
    private cocktailsservice: CocktailsService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.cocktailsservice.getIngredients().subscribe((response: any) => {
      this.ingredient = response['drinks'];
      // console.log(this.ingredient);
    });
    
    this.cocktailsservice.getGlasses().subscribe((response: any) => {
      this.glass = response['drinks'];
    });
    
    this.cocktailsservice.getAlcoholic().subscribe((response: any) => {
      this.alcoholic = response['drinks'];
    });
    
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
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        alcoholic: drink.strAlcoholic,
        instructions: drink.strInstructions,
        image: drink.strDrinkThumb,
        measure1: drink.strMeasure1,
        measure2: drink.strMeasure2,
        measure3: drink.strMeasure3,
        measure4: drink.strMeasure4,
        measure5: drink.strMeasure5,
        measure6: drink.strMeasure6,
        measure7: drink.strMeasure7,
        measure8: drink.strMeasure8,
        ingredient1: drink.strIngredient1,
        ingredient2: drink.strIngredient2,
        ingredient3: drink.strIngredient3,
        ingredient4: drink.strIngredient4,
        ingredient5: drink.strIngredient5,
        ingredient6: drink.strIngredient6,
        ingredient7: drink.strIngredient7,
        ingredient8: drink.strIngredient8,
      }
    });
}



  }
