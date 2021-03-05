import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Cocktail } from '../models/cocktail';


@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {
  cocktails: Cocktail[] = []

  constructor(private cocktailsservice: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsservice.getPopular().subscribe((data: any) => {
      this.cocktails = data.drinks.map((drink: any) => {
        return {
          name: drink.strDrink,
          category: drink.strCategory,
          alcoholic: drink.strAlcoholic,
          instructions: drink.strInstructions
        }
      });
      console.log(this.cocktails);
    })

}
}
