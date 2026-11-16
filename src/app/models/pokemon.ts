export interface Estadistica {
  nombre: string;
  valor: number;
}

export interface Habilidad {
  nombre: string;
  oculta: boolean;
}

export interface Pokemon {
  id: number;
  idEspecie: number;
  nombre: string;
  imagen: string | null;
  tipos: string[];
  altura: number;
  peso: number;
  estadisticas: Estadistica[];
  habilidades: Habilidad[];
}
