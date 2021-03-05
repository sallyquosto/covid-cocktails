import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-random-list',
  templateUrl: './random-list.component.html',
  styleUrls: ['./random-list.component.css']
})
export class RandomListComponent implements OnInit {
cocktails: Cocktail[] = []

  constructor(private cocktailservice: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailservice.getRandom().subscribe((data: any) => {
      this.cocktails = data.drinks.map((drink: any) => {
        return {
          name: drink.strDrink,
          category: drink.strCategory,
          alcoholic: drink.strAlcoholic,
          instructions: drink.strInstructions,
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
          ingredient8: drink.strIngredient8
        }
      });
      console.log(this.cocktails);
    })
  }

}
