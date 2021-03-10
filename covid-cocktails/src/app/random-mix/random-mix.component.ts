import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Meal } from '../models/cocktail';
import { Cocktail } from '../models/cocktail';
import { Router } from '@angular/router';



@Component({
  selector: 'app-random-mix',
  templateUrl: './random-mix.component.html',
  styleUrls: ['./random-mix.component.css']
})
export class RandomMixComponent implements OnInit {
  meals: Meal[] = [];
  cocktails: Cocktail[] = []



  constructor(
    private cocktailservice: CocktailsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cocktailservice.getRandom().subscribe((data: any) => {
      this.cocktailservice.getMealz().subscribe((data: any) => {
        this.cocktails = data.drinks.map((drink: any) => {
          this.cocktails = data.meals.map((meal: any) => {
            return {
              name: drink.strDrink,
              category: drink.strCategory,
              title: meal.strMeal,
              type: meal.strCategory,

            }
          });
          console.log(this.cocktails);

        })
      })
    })
  }

}
