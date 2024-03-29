import { recipeservice } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:recipe;
  constructor(private recipeservice:recipeservice) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeservice.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}




