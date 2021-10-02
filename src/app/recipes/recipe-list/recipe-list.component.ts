import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Recipe 1 Name",
     "Recipe 1 Description",
     "https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
