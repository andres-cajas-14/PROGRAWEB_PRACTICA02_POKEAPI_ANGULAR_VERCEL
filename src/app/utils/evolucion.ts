import { Evolucion } from '../models/evolucion';
import { DetalleEvolucion, EnlaceCadena } from '../models/respuestas';
import { extraerId, nombreLegible } from './formato';

const disparadores: Record<string, string> = {
  'level-up': 'Subir de nivel',
  trade: 'Intercambio',
  'use-item': 'Usar un objeto',
  shed: 'Condición especial',
  spin: 'Giro especial'
};

export function describirRequisito(detalle: DetalleEvolucion | undefined): string {
  if (!detalle) {
    return '';
  }

  if (detalle.min_level) {
    return 'Nivel ' + detalle.min_level;
  }

  if (detalle.item) {
    return 'Usar ' + nombreLegible(detalle.item.name);
  }

  if (detalle.min_happiness) {
    return 'Felicidad ' + detalle.min_happiness;
  }

  if (detalle.known_move) {
    return 'Conocer ' + nombreLegible(detalle.known_move.name);
  }

  if (detalle.time_of_day === 'day') {
    return 'Subir de nivel de día';
  }

  if (detalle.time_of_day === 'night') {
    return 'Subir de nivel de noche';
  }

  return disparadores[detalle.trigger.name] ?? nombreLegible(detalle.trigger.name);
}

export function aplanarCadena(raiz: EnlaceCadena): Evolucion[][] {
  const etapas: Evolucion[][] = [];
  let nivel: EnlaceCadena[] = [raiz];

  while (nivel.length > 0) {
    etapas.push(
      nivel.map(enlace => ({
        id: extraerId(enlace.species.url),
        nombre: nombreLegible(enlace.species.name),
        requisito: describirRequisito(enlace.evolution_details[0])
      }))
    );

    const siguiente: EnlaceCadena[] = [];
    for (const enlace of nivel) {
      siguiente.push(...enlace.evolves_to);
    }
    nivel = siguiente;
  }

  return etapas;
}
