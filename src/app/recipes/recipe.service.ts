import { shoppingservice } from '../shopping-list/shopping.service';
import { ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { recipe } from './recipe.model';

@Injectable()
export class recipeservice{
  recipeselected=new EventEmitter<recipe>();

  recipes: recipe[]=[
    new recipe('sample recipe',
    'this is simply a test',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
    [
      new ingredient('meat',10),
      new ingredient('bread',10)
    ]),
    new recipe('Home Made Pizza ','Pizza dough is a yeasted dough that requires active dry yeast.','https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg',
    [
      new ingredient('Dough',1),
      new ingredient('tomato',10),
      new ingredient('Cheese',5),
      new ingredient('capsicum',5)
    ])]

    constructor(private shoppingservice:shoppingservice){}

    getrecipes(){
      return this.recipes.slice();
    }
    setRecipe(recipe:recipe) {
      this.recipes.push(recipe);
  }

    addIngredientsToShoppingList(ingredients:ingredient[]){
        this.shoppingservice.addingredients(ingredients);
    }
}
