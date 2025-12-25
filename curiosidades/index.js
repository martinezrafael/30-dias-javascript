function verificarTipo(valor) {
  return {
    typeof: typeof valor,
    ehNull: valor === null,
  };
}

// Exemplos de uso
console.log(verificarTipo(null));
console.log(verificarTipo({}));
console.log(verificarTipo(undefined));
