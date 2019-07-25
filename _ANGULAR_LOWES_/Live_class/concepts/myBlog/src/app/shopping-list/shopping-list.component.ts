import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shoppingList.service' 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientList: IngredientModel[];
  ingredientName: string;
  constructor(private shoppingListService: ShoppingListService) { 
    
  }
  onIngredientAdded(){
    this.shoppingListService.addToList({name: this.ingredientName})
  }
  ngOnInit() {
    this.ingredientList = this.shoppingListService.getList();
    this.shoppingListService.emitData.subscribe((ingredients: IngredientModel[])=>{
      this.ingredientList = ingredients
    })
  }

}
