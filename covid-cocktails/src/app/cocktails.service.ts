import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';
import { Meal } from './models/meal'


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktails: Cocktail[] = [];
  meals: Meal[] = [];
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';
  randomURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';
  popularURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php'
  filterGlassURL: string ="https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g="
  filterIngredientURL: string = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="
  filterAlcoholicURL: string = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a="
  drinkIdURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i='
 

  constructor(private http: HttpClient) { }


  getCocktail(strDrink: string) {
    return this.http.get(`${this.apiURL}${strDrink}`);
  }

  getRandom = (): any => {
    return this.http.get(this.randomURL)
  }
  
  getCocktailbyGlass(g: string) {
    return this.http.get(`${this.filterGlassURL}${g}`);
  }

  getCocktailByIngredient(i: string) {
    return this.http.get(`${this.filterIngredientURL}${i}`)
  }

  getCocktailbyAlcoholic(a: string) {
    return this.http.get(`${this.filterAlcoholicURL}${a}`)
  }

  getDrinkbyId(drinkId: string) {
    return this.http.get(`${this.drinkIdURL}${drinkId}`)
  }


  getPopular = (): any => {
    return this.http.get(this.popularURL)
  }

  //these 3 get methods are making the API call to get the values for the filter drop downs
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
