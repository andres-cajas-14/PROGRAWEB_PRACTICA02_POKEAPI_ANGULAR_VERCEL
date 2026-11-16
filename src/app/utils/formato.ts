const estadisticas: Record<string, string> = {
  hp: 'Vida',
  attack: 'Ataque',
  defense: 'Defensa',
  'special-attack': 'Ataque esp.',
  'special-defense': 'Defensa esp.',
  speed: 'Velocidad'
};

const habitats: Record<string, string> = {
  cave: 'Cueva',
  forest: 'Bosque',
  grassland: 'Pradera',
  mountain: 'Montaña',
  rare: 'Raro',
  'rough-terrain': 'Terreno accidentado',
  sea: 'Mar',
  urban: 'Ciudad',
  'waters-edge': 'Orilla del agua'
};

const tipos: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Eléctrico',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragón',
  dark: 'Siniestro',
  steel: 'Acero',
  fairy: 'Hada'
};

export function nombreLegible(nombre: string): string {
  return nombre.replaceAll('-', ' ');
}

export function traducirEstadistica(nombre: string): string {
  return estadisticas[nombre] ?? nombreLegible(nombre);
}

export function traducirHabitat(nombre: string): string {
  return habitats[nombre] ?? nombreLegible(nombre);
}

export function traducirTipo(nombre: string): string {
  return tipos[nombre] ?? nombreLegible(nombre);
}

export function limpiarDescripcion(texto: string): string {
  return texto.replaceAll('\u00ad', '').replace(/\s+/g, ' ').trim();
}

export function elegirIdioma<T extends { language: { name: string } }>(lista: T[]): T | undefined {
  const enEspanol = lista.filter(item => item.language.name === 'es');
  if (enEspanol.length > 0) {
    return enEspanol[enEspanol.length - 1];
  }

  const enIngles = lista.filter(item => item.language.name === 'en');
  return enIngles[enIngles.length - 1];
}

export function extraerId(url: string): number {
  const partes = url.split('/').filter(parte => parte !== '');
  return Number(partes[partes.length - 1]);
}

export function urlImagen(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
