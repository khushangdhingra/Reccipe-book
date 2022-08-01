import { recipeservice } from './../recipe.service';
import { recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  isShow:boolean = false;

    recipes:recipe[] ;

    constructor(private recipeservice:recipeservice) { }

  ngOnInit(){
    this.recipes=this.recipeservice.getrecipes();
  }

  addNewRecipe() {
    this.isShow = !this.isShow;

  }

  submitrecipe(value: any) {
    this.recipeservice.setRecipe(value);
    this.isShow = false;
  }

}
