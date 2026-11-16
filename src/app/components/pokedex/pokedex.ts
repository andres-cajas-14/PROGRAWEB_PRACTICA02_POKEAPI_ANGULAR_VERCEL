import { Component, computed, inject, signal } from '@angular/core';
import { Especie } from '../../models/especie';
import { Evolucion } from '../../models/evolucion';
import { Pokemon } from '../../models/pokemon';
import { PokeapiService } from '../../services/pokeapi';
import { BuscadorPokemon } from '../buscador-pokemon/buscador-pokemon';
import { CadenaEvolutiva } from '../cadena-evolutiva/cadena-evolutiva';
import { ComparacionPokemon } from '../comparacion-pokemon/comparacion-pokemon';
import { FichaPokemon } from '../ficha-pokemon/ficha-pokemon';

@Component({
  selector: 'app-pokedex',
  imports: [BuscadorPokemon, FichaPokemon, CadenaEvolutiva, ComparacionPokemon],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex {
  private readonly servicio = inject(PokeapiService);
  private readonly totalPokemon = 1025;

  public pokemon = signal<Pokemon | null>(null);
  public especie = signal<Especie | null>(null);
  public etapas = signal<Evolucion[][]>([]);
  public cargando = signal(false);
  public error = signal('');

  public comparando = signal(false);
  public comparado = signal<Pokemon | null>(null);
  public cargandoComparado = signal(false);
  public errorComparado = signal('');

  public puedeRetroceder = computed(() => (this.especie()?.id ?? 0) > 1);
  public puedeAvanzar = computed(() => this.especie() !== null);

  public async cargar(entrada: string): Promise<void> {
    if (this.cargando()) {
      return;
    }

    this.error.set('');
    this.cargando.set(true);

    try {
      const pokemon = await this.servicio.getPokemon(entrada);
      const especie = await this.servicio.getEspecie(pokemon.idEspecie);
      const etapas = await this.servicio.getEvoluciones(especie.idCadena);

      this.pokemon.set(pokemon);
      this.especie.set(especie);
      this.etapas.set(etapas);
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'No fue posible consultar.');
    } finally {
      this.cargando.set(false);
    }
  }

  public irA(id: number): void {
    this.cargar(String(id));
  }

  public anterior(): void {
    const actual = this.especie();
    if (actual) {
      this.cargar(String(actual.id - 1));
    }
  }

  public siguiente(): void {
    const actual = this.especie();
    if (actual) {
      this.cargar(String(actual.id + 1));
    }
  }

  public aleatorio(): void {
    this.cargar(String(Math.floor(Math.random() * this.totalPokemon) + 1));
  }

  public alternarComparacion(): void {
    this.comparando.update(valor => !valor);
  }

  public async cargarComparado(entrada: string): Promise<void> {
    if (this.cargandoComparado()) {
      return;
    }

    this.errorComparado.set('');
    this.cargandoComparado.set(true);

    try {
      this.comparado.set(await this.servicio.getPokemon(entrada));
    } catch (error) {
      this.errorComparado.set(error instanceof Error ? error.message : 'No fue posible consultar.');
    } finally {
      this.cargandoComparado.set(false);
    }
  }
}
