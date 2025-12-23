function contarVogais(texto) {
  return texto.match(/[aeiou]/gi)?.length || 0;
}
