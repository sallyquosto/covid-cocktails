import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal';
import { Router } from '@angular/router';
import { MealsService } from '../meals.service';



@Component({
  selector: 'app-random-mix',
  templateUrl: './random-mix.component.html',
  styleUrls: ['./random-mix.component.css']
})
export class RandomMixComponent implements OnInit {
  meals: Meal[] = [];
  title = 'covid cocktails';


  constructor(
    private mealsservice: MealsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.mealsservice.getMealz().subscribe((data: any) => {
      this.meals = data.meals.map((meal: any) => {
        return {
          title: meal.strMeal,
          type: meal.strCategory,
          area: meal.strArea,
          instructions: meal.strInstructions,
          measure1: meal.strMeasure1.trim() ?meal.strMeasure15:null,
          measure2: meal.strMeasure2,
          measure3: meal.strMeasure3,
          measure4: meal.strMeasure4,
          measure5: meal.strMeasure5,
          measure6: meal.strMeasure6,
          measure7: meal.strMeasure7,
          measure8: meal.strMeasure8,
          measure9: meal.strMeasure9,
          measure10: meal.strMeasure10,
          measure11: meal.strMeasure11,
          measure12: meal.strMeasure12,
          measure13: meal.strMeasure13,
          measure14: meal.strMeasure14,
          measure15: meal.strMeasure15,
          ingredient1: meal.strIngredient1,
          ingredient2: meal.strIngredient2,
          ingredient3: meal.strIngredient3,
          ingredient4: meal.strIngredient4,
          ingredient5: meal.strIngredient5,
          ingredient6: meal.strIngredient6,
          ingredient7: meal.strIngredient7,
          ingredient8: meal.strIngredient8,
          ingredient9: meal.strIngredient9,
          ingredient10: meal.strIngredient10,
          ingredient11: meal.strIngredient11,
          ingredient12: meal.strIngredient12,
          ingredient13: meal.strIngredient13,
          ingredient14: meal.strIngredient14,
          ingredient15: meal.strIngredient15,
          image: meal.strMealThumb
        }
      });
      console.log(this.meals)

    })

  }

}
