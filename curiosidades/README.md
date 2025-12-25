\*\*\*\*# Curiosidade JavaScript – typeof null

## 📌 Descrição

Este exemplo demonstra um comportamento histórico do JavaScript:
o operador `typeof` retorna `"object"` quando aplicado a `null`.

Esse detalhe pode causar bugs sutis no backend quando validações
de tipo são feitas de forma incorreta.

## 🎯 Objetivo

Evidenciar a diferença entre verificação de tipo e verificação de valor,
reforçando boas práticas para validações em JavaScript.

## 💡 Solução

O código compara duas abordagens:

- `typeof valor` para identificar o tipo
- `valor === null` para validar explicitamente o valor `null`

Dessa forma, fica claro por que `typeof` **não deve ser usado isoladamente**
para esse tipo de validação.

## 🧠 Aprendizados

- `typeof null === "object"` é um comportamento histórico da linguagem
- `null` representa ausência intencional de valor
- Validações defensivas evitam erros no backend
- Comparações explícitas aumentam previsibilidade

## ▶️ Como executar

```bash
node index.js
```
