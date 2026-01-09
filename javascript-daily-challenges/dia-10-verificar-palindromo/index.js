function isPalindromo(palavra) {
  const invertida = palavra.split("").reverse().join("");
  return palavra === invertida;
}
