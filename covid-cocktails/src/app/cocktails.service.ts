import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';
  apiRandom: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';

  constructor(private http: HttpClient) { }

  getCocktail(strDrink: string) {
    return this.http.get(`${this.apiURL}${strDrink}`)
  }

  getRandom(strDrink: string) {
    return this.http.get(`${this.apiRandom}${strDrink}`)
  }
  
}
