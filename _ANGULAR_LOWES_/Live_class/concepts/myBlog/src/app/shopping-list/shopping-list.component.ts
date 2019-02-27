import { Component, OnInit } from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model'; 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: IngredientModel[] = [
    new IngredientModel('Rice', 100),
    new IngredientModel('Chicken', 250)
  ]
  constructor() { }

  ngOnInit() {
  }

}
