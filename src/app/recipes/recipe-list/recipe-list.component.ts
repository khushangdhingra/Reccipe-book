import { recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { outputAst, ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   @Output() recipewasSelected=new EventEmitter<recipe>();

  recipes: recipe[]=[
    new recipe('sample recipe','this is simply a test','https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
    new recipe('sample recipe','this is simply a test','https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png')]


    constructor() { }

  ngOnInit(): void {
  }


  OnrecipeSelected(recipe:recipe){
      this.recipewasSelected.emit(recipe);
  }
}
