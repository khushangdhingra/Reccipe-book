import { shoppingservice } from './shopping.service';
import { ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[];

  addingredient(Ingredient:ingredient){
      this.ingredients.push(Ingredient);
      this.shoppingservice.ingredientschanged
        .subscribe(
          (ingredients:ingredient[])=>{
            this.ingredients=ingredients;
          }
        )
  }

  constructor(private shoppingservice:shoppingservice) { }

  ngOnInit(){
    this.ingredients=this.shoppingservice.getingredients();
  }

}
