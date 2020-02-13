import {Injectable, EventEmitter, Output} from '@angular/core'
import {IngredientModel} from './shared/ingredient.model';

@Injectable()
export class ShoppingListService{
    @Output() emitData = new EventEmitter<IngredientModel[]>();
    private shoppingList:IngredientModel[] = [
        new IngredientModel('Rice', 100),
        new IngredientModel('Chicken', 250)
    ];
    getList(){
        return this.shoppingList.slice();
    }
    addToList(listItem: {name: string}){
        this.shoppingList.push(new IngredientModel(listItem.name, 10));
        console.log(this.shoppingList);
        this.emitData.emit(this.shoppingList.slice());
    }
}