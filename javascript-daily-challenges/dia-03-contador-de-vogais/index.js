function contarVogais(texto) {
  if (typeof texto !== "string") return 0;
  return texto.match(/[aeiou]/gi)?.length || 0;
}
