import { recipeservice } from './../../recipe.service';
import { recipe } from './../../recipe.model';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:recipe;

  constructor(private recipeservice:recipeservice) { }

  ngOnInit(): void {
  }


  Onselected(){
     this.recipeservice.recipeselected.emit(this.recipe);
  }
}
