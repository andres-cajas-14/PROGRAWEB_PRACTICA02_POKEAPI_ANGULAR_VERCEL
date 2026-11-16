export function limpiarNombre(entrada: string): string {
  const texto = entrada.trim().toLowerCase().replace(/\s+/g, '-');

  if (texto === '') {
    throw new Error('Escribe un nombre o número de Pokémon.');
  }

  const permitidos = 'abcdefghijklmnopqrstuvwxyz0123456789-';
  for (const letra of texto) {
    if (!permitidos.includes(letra)) {
      throw new Error('Usa solo letras, números y espacios.');
    }
  }

  return texto;
}
