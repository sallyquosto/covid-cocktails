import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';
// import { Meal } from './models/cocktail'


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktails: Cocktail[] = [];
  // meals: Meal[] = [];
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';
  randomURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';
  popularURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';
  // goodMeal: string = 'https://www.themealdb.com/api/json/v2/9973533/random.php';
  drinks: any;

  constructor(private http: HttpClient) { }

  // getMealz = (): any => {
  //   return this.http.get(this.goodMeal)
  // }

  getCocktail(strDrink: string) {
    return this.http.get(`${this.apiURL}${strDrink}`)
  }

  getRandom = (): any => {
    return this.http.get(this.randomURL)
  }
  getPopular = (): any => {
    return this.http.get(this.popularURL)
  }

  getIngredients() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list');
  }

  getGlasses() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?g=list');
  }

  getAlcoholic() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?a=list');
  } 
  
}
