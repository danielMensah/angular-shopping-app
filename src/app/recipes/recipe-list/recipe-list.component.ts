import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel('Test R.', 'No description', '')
  ];

  constructor() { }

  ngOnInit() {
  }

}
