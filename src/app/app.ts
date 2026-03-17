import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Bride } from './componets/bride/bride';

import { Groom } from './componets/groom/groom';
import { Hero } from './componets/hero/hero';
import { Location } from './componets/location/location'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,Bride,Groom,Hero,Location],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('weddingWebsite');
}
