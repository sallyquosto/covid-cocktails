
import { Component, OnInit } from '@angular/core';
import { CocktailsService } from '../cocktails.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cocktail } from '../models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  drinkData: any;


  get cocktails(): Cocktail[] {
    return this.cocktailsservice.cocktails;
  }



  constructor(
    private route: ActivatedRoute,
    private cocktailsservice: CocktailsService,
  
    ) { }

  ngOnInit(): void {

   
  }

}
