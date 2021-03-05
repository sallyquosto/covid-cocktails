
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  cocktails: Cocktail[] = []
  ingredient: any
  glass: any;
  alcoholic: any;
  drinks: any;
  ingredientSelected: any;
  glassSelected: any;
  alcoholicSelected: any;
  

  constructor(
    private cocktailsservice: CocktailsService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.cocktailsservice.getCocktail('Gin').subscribe((data: any) => {
      this.cocktails = data.drinks.map((drink: any) => {
        return {
          name: drink.strDrink,
          category: drink.strCategory,
          alcoholic: drink.strAlcoholic,
          instructions: drink.strInstructions
        }
      });
      // console.log(this.cocktails);
    })

    this.cocktailsservice.getIngredients().subscribe((response: any) => {
      this.ingredient = response['drinks'];
      // console.log(this.ingredient);
    });

    this.cocktailsservice.getGlasses().subscribe((response: any) => {
      this.glass = response['drinks'];
    });

    this.cocktailsservice.getAlcoholic().subscribe((response: any) => {
      this.alcoholic = response['drinks'];
    });
    
  }

  // findDrinksByFilter(form: NgForm) {
  //   this.router.queryParams.subscribe((params) => {
  //     console.log(params);
  //   })
  //   if (form.value.ingredient) {
  //     parameters.ingredient= form.value.ingredient;
  //   }
  //   if (form.value.glass) {
  //     parameters.glass = form.value.glass;
  //   }
  //   if (form.value.alcoholic) {
  //     parameters.alcoholic = form.value.alocohlic;
  //   }
  //   this.cocktailsservice.getCocktailsByFilter().subscribe((response: any) => {
  //     this.cocktails = response['cocktails'];
  //     console.log(this.cocktails);
  //   })
  // }

}
