import { Component } from '@angular/core';
import { Pokedex } from './components/pokedex/pokedex';

@Component({
  imports: [Pokedex],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
