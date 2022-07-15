import { ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[]=[
new ingredient('apple',5),
new ingredient('tomato',10),
];

  addingredient(Ingredient:ingredient){
      this.ingredients.push(Ingredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
