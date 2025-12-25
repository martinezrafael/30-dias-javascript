function somarPositivos(numeros) {
  return numeros.filter((n) => n > 0).reduce((a, b) => a + b, 0);
}
