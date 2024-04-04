import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CocktailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Service';
  imgOfTheDay: string = '';

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data: any) => {
      this.imgOfTheDay = data.url;
    });
  }
}

