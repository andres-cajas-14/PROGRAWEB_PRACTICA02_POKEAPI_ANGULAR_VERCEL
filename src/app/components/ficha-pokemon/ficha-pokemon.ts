import { Component, computed, input } from '@angular/core';
import { Especie } from '../../models/especie';
import { Pokemon } from '../../models/pokemon';
import { sumarEstadisticas } from '../../utils/estadisticas';
import { traducirTipo } from '../../utils/formato';

@Component({
  selector: 'app-ficha-pokemon',
  templateUrl: './ficha-pokemon.html',
  styleUrl: './ficha-pokemon.css'
})
export class FichaPokemon {
  public pokemon = input.required<Pokemon>();
  public especie = input.required<Especie>();

  public claseTipo = computed(() => 'tipo-' + (this.pokemon().tipos[0] ?? 'normal'));
  public total = computed(() => sumarEstadisticas(this.pokemon()));
  public traducirTipo = traducirTipo;
}
