import { ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('AmountInput') AmountInputref:ElementRef;
  @ViewChild('NameInput') NameInputref:ElementRef;
  @Output() ingredientadder= new EventEmitter<ingredient>()
  constructor() { }

  ngOnInit(){
  }

  AddIngredient(){
    const ingname=this.NameInputref.nativeElement.value;
    const ingamount=this.AmountInputref.nativeElement.value;
    const newIngredient=new ingredient(ingname,ingamount);
    this.ingredientadder.emit(newIngredient);
  }

}
