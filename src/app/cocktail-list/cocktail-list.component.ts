import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';
import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class CocktailListComponent {

  constructor(private cocktailService: CocktailService) { }

  cocktails() {
    return this.cocktailService.getCocktails();
  }

}
