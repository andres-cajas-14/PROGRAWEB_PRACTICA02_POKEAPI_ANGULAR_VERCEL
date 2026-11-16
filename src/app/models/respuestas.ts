export interface Recurso {
  name: string;
  url: string;
}

export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  species: Recurso;
  sprites: {
    front_default: string | null;
    other?: { 'official-artwork'?: { front_default: string | null } };
  };
  types: { type: Recurso }[];
  stats: { base_stat: number; stat: Recurso }[];
  abilities: { ability: Recurso; is_hidden: boolean }[];
}

export interface SpeciesResponse {
  id: number;
  is_legendary: boolean;
  is_mythical: boolean;
  habitat: Recurso | null;
  evolution_chain: { url: string };
  genera: { genus: string; language: { name: string } }[];
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}

export interface DetalleEvolucion {
  min_level: number | null;
  min_happiness: number | null;
  time_of_day: string;
  trigger: { name: string };
  item: { name: string } | null;
  known_move: { name: string } | null;
}

export interface EnlaceCadena {
  species: Recurso;
  evolution_details: DetalleEvolucion[];
  evolves_to: EnlaceCadena[];
}

export interface ChainResponse {
  id: number;
  chain: EnlaceCadena;
}
