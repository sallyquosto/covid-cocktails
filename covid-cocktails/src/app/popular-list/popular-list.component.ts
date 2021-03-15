import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { CocktailsService } from '../cocktails.service';
import { Cocktail, CocktailGroup } from '../models/cocktail';


@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {
  cocktails: Cocktail[] = []
  groups: CocktailGroup[] = []
  selectedCocktail?: any;

  constructor(private cocktailsservice: CocktailsService) { }

  ngOnInit(): void {
    this.cocktailsservice.getPopular().subscribe((data: any) => {
      this.cocktails = data.drinks.map((drink: any) => {
        return {
          name: drink.strDrink,
          category: drink.strCategory,
          alcoholic: drink.strAlcoholic,
          instructions: drink.strInstructions,
          image: drink.strDrinkThumb
        }
      });
      // console.log(this.cocktails);
      this.populateCocktailGroups();
    })
  }

  // carousel images to display 4 at a time
  populateCocktailGroups(): void {
    let counter = 1;
    for (let index = 0; index < this.cocktails.length; index += 4) {
        let group = this.cocktails.slice(index, index + 4)
        this.groups.push(<CocktailGroup>{Cocktails: group, groupId: counter})
        counter++;
    }

    console.log(this.groups);
  }

  onSelect(cocktail: any) {
    this.selectedCocktail = cocktail;
  }

  closePopup() {
    this.selectedCocktail = null;
  }
}
