import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.model' 
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  activeRecipe = new RecipeModel('Chicken Biryani', 'This is how you prepare a biryani', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg')
  constructor() {}
  onRecipeChanged(e){
    this.activeRecipe = e;
  }
  ngOnInit() {
  }

}
