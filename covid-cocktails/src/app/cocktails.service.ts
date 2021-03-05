import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';


@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  cocktails: Cocktail[] = [];
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';
  popularURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php'
  drinks: any;

  constructor(private http: HttpClient) { }

  getCocktail(strDrink: string) {
    return this.http.get(`${this.apiURL}${strDrink}`)
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
