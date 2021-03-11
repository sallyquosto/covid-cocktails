import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  cocktails: Cocktail[] = [];
  ingredient: any;
  glass: any;
  alcoholic: any;
  drinks: any;

  constructor(
    private cocktailsservice: CocktailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this section is pulling the values to populate the dropdown menus in the fitler search
    this.cocktailsservice.getIngredients().subscribe((response: any) => {
      this.ingredient = response['drinks'];
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

  searchByIngredients(ingredient: any) {
    this.cocktailsservice
      .getCocktailByIngredient(ingredient.ingredient)
      .subscribe((data: any) => {
        this.setFilters(data);
        this.router.navigateByUrl('/cocktail-list');
      });
  }

  searchByGlass(glass: any) {
    this.cocktailsservice
      .getCocktailbyGlass(glass.glass)
      .subscribe((data: any) => {
        this.setFilters(data);
        this.router.navigateByUrl('/cocktail-list');
      });
  }

  searchByAlcoholic(alcoholic: any) {
    this.cocktailsservice
      .getCocktailbyAlcoholic(alcoholic.alcoholic)
      .subscribe((data: any) => {
        this.setFilters(data);
        this.router.navigateByUrl('/cocktail-list');
      });
  }

  setCocktail(data: any) {
    this.cocktailsservice.cocktails = data.drinks.map((drink: any) => {
      return {
        id: drink.idDrink,
        name: drink.strDrink,
        category: drink.strCategory,
        glass: drink.strGlass,
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
      };
    });
  }

  setFilters(data: any) {
    this.cocktailsservice.cocktails = [];
    const drinkIds = data.drinks.map((drink: any) => drink.idDrink);
    console.log(drinkIds);
    console.log(this.cocktailsservice.cocktails);
    for (let drinkId of drinkIds) {
      this.cocktailsservice
        .getDrinkbyId(drinkId)
        .subscribe((drinkResult: any) => {
          const drink: any = drinkResult.drinks[0];
          const cocktail: Cocktail = {
            id: drink.idDrink,
            name: drink.strDrink,
            category: drink.strCategory,
            glass: drink.strGlass,
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
            measure9: drink.strMeasure9,
            measure10: drink.strMeasure10,
            measure11: drink.strMeasure11,
            measure12: drink.strMeasure12,
            measure13: drink.strMeasure13,
            measure14: drink.strMeasure14,
            measure15: drink.strMeasure15,
            ingredient1: drink.strIngredient1,
            ingredient2: drink.strIngredient2,
            ingredient3: drink.strIngredient3,
            ingredient4: drink.strIngredient4,
            ingredient5: drink.strIngredient5,
            ingredient6: drink.strIngredient6,
            ingredient7: drink.strIngredient7,
            ingredient8: drink.strIngredient8,
            ingredient9: drink.strIngredient9,
            ingredient10: drink.strIngredient10,
            ingredient11: drink.strIngredient11,
            ingredient12: drink.strIngredient12,
            ingredient13: drink.strIngredient13,
            ingredient14: drink.strIngredient14,
            ingredient15: drink.strIngredient15,

          }
          this.cocktailsservice.cocktails.push(cocktail);
          console.log(cocktail);
        });
    }
  }
}
