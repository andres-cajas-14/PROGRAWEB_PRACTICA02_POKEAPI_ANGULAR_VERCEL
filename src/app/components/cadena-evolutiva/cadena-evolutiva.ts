import { Component, computed, input, output } from '@angular/core';
import { Evolucion } from '../../models/evolucion';
import { urlImagen } from '../../utils/formato';

@Component({
  selector: 'app-cadena-evolutiva',
  templateUrl: './cadena-evolutiva.html',
  styleUrl: './cadena-evolutiva.css'
})
export class CadenaEvolutiva {
  public etapas = input.required<Evolucion[][]>();
  public actualId = input.required<number>();
  public elegido = output<number>();

  public sinEvoluciones = computed(() => this.etapas().length <= 1);
  public imagen = urlImagen;
}
