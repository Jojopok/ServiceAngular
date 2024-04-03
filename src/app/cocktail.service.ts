import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail-list/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return [
      { name: 'Mojito', price: 8, image: 'mojito.jpg' },
      { name: 'Pina Colada', price: 8, image: 'pina-colada.jpg' },
      { name: 'Bloody Mary', price: 8, image: 'bloody-mary.jpg' },
      { name: 'Caipirinha', price: 8, image: 'caipirinha.jpg' },
      { name: 'Tequila Sunrise', price: 8, image: 'tequila-sunrise.jpg' },
      { name: 'Margarita', price: 8, image: 'margarita.jpg' },
      { name: 'Cosmopolitan', price: 8, image: 'cosmopolitan.jpg' },
      { name: 'Mai Tai', price: 8, image: 'mai-tai.jpg' },
      { name: 'Mint Julep', price: 8, image: 'mint-julep.jpg' },
      { name: 'Moscow Mule', price: 8, image: 'moscow-mule.jpg' },
      { name: 'Old Fashioned', price: 8, image: 'old-fashioned.jpg' },
      { name: 'Whiskey Sour', price: 8, image: 'whiskey-sour.jpg' }
    ];
  }

}
