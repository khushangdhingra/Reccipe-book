import { ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';



export class shoppingservice{
  ingredientschanged=new EventEmitter<ingredient[]>();
  ingredients: ingredient[]=[
    new ingredient('apple',5),
    new ingredient('tomato',10),
    ];

    addingredient(Ingredient:ingredient){
        this.ingredients.push(Ingredient);
        this.ingredientschanged.emit(this.ingredients.slice());
    }
    getingredients(){
      return this.ingredients.slice();     //slice is used to make a copy of that array so
                                          //original array dont get disturbed
    }


    addingredients(ingredients:ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientschanged.emit(this.ingredients.slice());
    }
}
