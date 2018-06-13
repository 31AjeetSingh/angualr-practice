import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test',
    'https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13-1500x1125.jpg'),
    new Recipe('BigMac', 'This is BigMac Way',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzauOPgUujVNwdB0YSqOrXV-g8CpD616PcEZCNnKwupf-3-bQ'),
    new Recipe('Pizza', 'Pizza Pizza Specail!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaWFrbqkT_zoh-OK0OIdoaTGo8uOxto_n_8EqaJPsJwzULR34'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
