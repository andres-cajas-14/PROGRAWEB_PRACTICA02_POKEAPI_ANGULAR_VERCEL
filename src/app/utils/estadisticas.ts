import { Pokemon } from '../models/pokemon';

export function sumarEstadisticas(pokemon: Pokemon): number {
  let suma = 0;

  for (const estadistica of pokemon.estadisticas) {
    suma = suma + estadistica.valor;
  }

  return suma;
}
