import { Component, OnInit, Input } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Router} from '@angular/router';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {


  get cocktails(): Cocktail[] {
    return this.cocktailsservice.cocktails;
  }

  selectedCocktail?: Cocktail;

  constructor(
    private router: Router,
    private cocktailsservice: CocktailsService
    ) { }



  ngOnInit(): void {
    
  }

  navHome() {
    this.router.navigate(['/']);
  }
  // function that allows the selected drink information to generate as a details popup with correct drink information
  onSelect(cocktail: Cocktail) {
    this.selectedCocktail = cocktail;
  }
}
