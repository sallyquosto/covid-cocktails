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
          tags: meal.strTags,
          measure1: meal.strMeasure1,
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
          measure16: meal.strMeasure16,
          measure17: meal.strMeasure17,
          measure18: meal.strMeasure18,
          measure19: meal.strMeasure19,
          measure20: meal.strMeasure20,
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
          ingredient16: meal.strIngredient16,
          ingredient17: meal.strIngredient17,
          ingredient18: meal.strIngredient18,
          ingredient19: meal.strIngredient19,
          ingredient20: meal.strIngredient20,
          image: meal.strMealThumb
        }
      });
      console.log(this.meals)

    })

  }

}


// .trim() ?meal.strMeasure1:null