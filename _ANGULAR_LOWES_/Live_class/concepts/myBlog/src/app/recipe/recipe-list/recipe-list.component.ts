import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: RecipeModel[] = [
    new RecipeModel('Tandoori Chicken', 'Prepare your dish as you like it. Include chicken', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg'),
    new RecipeModel('Chicken Biryani', 'Again, prepare your dish as you like it. Include chicken and rice', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
