import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-buscador-pokemon',
  templateUrl: './buscador-pokemon.html',
  styleUrl: './buscador-pokemon.css'
})
export class BuscadorPokemon {
  public etiqueta = input.required<string>();
  public cargando = input(false);
  public error = input('');
  public navegacion = input(false);
  public puedeRetroceder = input(false);
  public puedeAvanzar = input(false);

  public buscar = output<string>();
  public anterior = output<void>();
  public siguiente = output<void>();
  public aleatorio = output<void>();
}
