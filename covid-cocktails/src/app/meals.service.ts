import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { Meal } from './models/meal';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  meals: Meal[] = [];
  goodMeal: string = 'https://www.themealdb.com/api/json/v2/9973533/random.php';

  constructor(private http: HttpClient) { }

  getMealz = (): any => {
    return this.http.get(this.goodMeal)
  }
}
