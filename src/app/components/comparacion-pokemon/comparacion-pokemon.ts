import { Component, computed, input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { sumarEstadisticas } from '../../utils/estadisticas';

interface Fila {
  nombre: string;
  a: number;
  b: number;
}

@Component({
  selector: 'app-comparacion-pokemon',
  templateUrl: './comparacion-pokemon.html',
  styleUrl: './comparacion-pokemon.css'
})
export class ComparacionPokemon {
  public a = input.required<Pokemon>();
  public b = input.required<Pokemon>();

  public filas = computed<Fila[]>(() =>
    this.a().estadisticas.map(estadistica => {
      const otra = this.b().estadisticas.find(item => item.nombre === estadistica.nombre);
      return { nombre: estadistica.nombre, a: estadistica.valor, b: otra ? otra.valor : 0 };
    })
  );

  public totalA = computed(() => sumarEstadisticas(this.a()));
  public totalB = computed(() => sumarEstadisticas(this.b()));

  public resumen = computed(() => {
    const nombreA = this.a().nombre;
    const nombreB = this.b().nombre;

    if (this.totalA() > this.totalB()) {
      return `${nombreA} supera a ${nombreB} en el total de estadísticas (${this.totalA()} frente a ${this.totalB()}).`;
    }

    if (this.totalB() > this.totalA()) {
      return `${nombreB} supera a ${nombreA} en el total de estadísticas (${this.totalB()} frente a ${this.totalA()}).`;
    }

    return `${nombreA} y ${nombreB} tienen el mismo total de estadísticas (${this.totalA()}).`;
  });
}
