/**
 * QUESTÃO 5 — Analisador Estatístico de Números em Array
 */
function analisarNumeros(arrayDeNumeros) {
  if (!Array.isArray(arrayDeNumeros) || arrayDeNumeros.length === 0) {
    return { total: 0, maior: null, menor: null, media: 0, pares: 0, impares: 0 };
  }

  const total = arrayDeNumeros.length;
  const soma = arrayDeNumeros.reduce((acc, n) => acc + n, 0);
  const maior = Math.max(...arrayDeNumeros);
  const menor = Math.min(...arrayDeNumeros);
  const media = Math.round((soma / total) * 100) / 100;
  const pares = arrayDeNumeros.filter((n) => n % 2 === 0).length;
  const impares = total - pares;

  return { total, maior, menor, media, pares, impares };
}

function demo() {
  console.log("=== QUESTÃO 5 — Analisador de Números ===");
  console.log(analisarNumeros([12, 5, 8, 130, 44, 3]));
  console.log(analisarNumeros([]));
}

if (require.main === module) demo();

module.exports = { analisarNumeros, demo };
