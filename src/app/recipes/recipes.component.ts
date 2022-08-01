import { recipeservice } from './recipe.service';
import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[recipeservice]
})
export class RecipesComponent implements OnInit {


  selectedrecipe:recipe;
  constructor(private recipeservice:recipeservice) { }

  ngOnInit(){
    this.recipeservice.recipeselected
    .subscribe(
      (recipe:recipe)=>{
        this.selectedrecipe=recipe;
      }
    )
  }

}
