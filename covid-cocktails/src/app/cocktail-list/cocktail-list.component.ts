import { Component, OnInit } from '@angular/core';
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

  selectedCocktail?: any;

  constructor(
    private router: Router,
    private cocktailsservice: CocktailsService
    ) { }



  ngOnInit(): void {
    
  }
  // router to nagivate you to the homepage
  navHome() {
    this.router.navigate(['/']);
  }
  // function that allows the selected drink information to generate as a details popup with correct drink information
  onSelect(cocktail: any) {
    this.selectedCocktail = cocktail;
  }

  closePopup() {
    this.selectedCocktail = null;
  }
}
