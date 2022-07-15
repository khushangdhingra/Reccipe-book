import { recipe } from './../../recipe.model';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe:recipe;
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }


  Onselected(){
    this.recipeSelected.emit();
  }
}
