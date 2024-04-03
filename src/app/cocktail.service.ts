import { Injectable, inject } from '@angular/core';
import { Cocktail } from './cocktail-list/cocktail.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  private http = inject(HttpClient);
  

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }

}
