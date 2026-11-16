import { Injectable } from '@angular/core';
import { Especie } from '../models/especie';
import { Evolucion } from '../models/evolucion';
import { Pokemon } from '../models/pokemon';
import { ChainResponse, PokemonResponse, SpeciesResponse } from '../models/respuestas';
import { limpiarNombre } from '../utils/entrada';
import { aplanarCadena } from '../utils/evolucion';
import {
  elegirIdioma,
  extraerId,
  limpiarDescripcion,
  nombreLegible,
  traducirEstadistica,
  traducirHabitat
} from '../utils/formato';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private readonly base = 'https://pokeapi.co/api/v2';
  private readonly cache = new Map<string, unknown>();

  public async getPokemon(entrada: string): Promise<Pokemon> {
    const clave = limpiarNombre(entrada);
    const datos = await this.pedir<PokemonResponse>('pokemon', clave);

    return {
      id: datos.id,
      idEspecie: extraerId(datos.species.url),
      nombre: nombreLegible(datos.name),
      imagen: datos.sprites.other?.['official-artwork']?.front_default ?? datos.sprites.front_default,
      tipos: datos.types.map(item => item.type.name),
      altura: datos.height / 10,
      peso: datos.weight / 10,
      estadisticas: datos.stats.map(item => ({
        nombre: traducirEstadistica(item.stat.name),
        valor: item.base_stat
      })),
      habilidades: datos.abilities.map(item => ({
        nombre: nombreLegible(item.ability.name),
        oculta: item.is_hidden
      }))
    };
  }

  public async getEspecie(id: number): Promise<Especie> {
    const datos = await this.pedir<SpeciesResponse>('pokemon-species', String(id));
    const categoria = elegirIdioma(datos.genera)?.genus;
    const descripcion = elegirIdioma(datos.flavor_text_entries)?.flavor_text;

    return {
      id: datos.id,
      categoria: categoria ?? 'Sin categoría',
      descripcion: descripcion ? limpiarDescripcion(descripcion) : 'Sin descripción disponible.',
      habitat: datos.habitat ? traducirHabitat(datos.habitat.name) : 'Desconocido',
      legendario: datos.is_legendary,
      mitico: datos.is_mythical,
      idCadena: extraerId(datos.evolution_chain.url)
    };
  }

  public async getEvoluciones(idCadena: number): Promise<Evolucion[][]> {
    const datos = await this.pedir<ChainResponse>('evolution-chain', String(idCadena));
    return aplanarCadena(datos.chain);
  }

  private async pedir<T>(recurso: string, clave: string): Promise<T> {
    const ruta = `${recurso}/${clave}`;

    const guardado = this.cache.get(ruta);
    if (guardado) {
      return guardado as T;
    }

    let respuesta: Response;
    try {
      respuesta = await fetch(`${this.base}/${ruta}/`);
    } catch {
      throw new Error('No fue posible conectar con PokéAPI. Revisa tu conexión.');
    }

    if (respuesta.status === 404) {
      throw new Error(
        recurso === 'pokemon' ? 'No existe ese Pokémon.' : 'No se encontró el recurso solicitado.'
      );
    }

    if (!respuesta.ok) {
      throw new Error('No fue posible consultar PokéAPI. Intenta de nuevo.');
    }

    const datos = (await respuesta.json()) as T;
    this.cache.set(ruta, datos);
    return datos;
  }
}
