import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  
  apiURL: string = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=';

  constructor(private http: HttpClient) { }

  getCocktail(strDrink: string) {
    return this.http.get(`${this.apiURL}${strDrink}`)
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

  // getCocktailsByFilter(queryParams: any): Observable<any> {
  //   let parameters: any = {};
  //   if (queryParams.ingredient) {
  //     parameters.ingredient= queryParams.value.ingredient;
  //   }
  //   if (queryParams.value.glass) {
  //     parameters.glass = queryParams.value.glass;
  //   }
  //   if (queryParams.value.alcoholic) {
  //     parameters.alcoholic = queryParams.value.alocohlic;
  //   }
  //   return this.http.get('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=', {
  //     params: parameters,
  //   });
  }
  
