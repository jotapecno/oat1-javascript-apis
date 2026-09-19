/**
 * QUESTÃO 3 — Tabuada Dinâmica e Formatada
 */
function gerarTabuada(numero, limite = 10) {
  const resultado = [];
  for (let i = 1; i <= limite; i++) {
    resultado.push(`${numero} x ${i} = ${numero * i}`);
  }
  return resultado;
}

function demo() {
  console.log("=== QUESTÃO 3 — Tabuada Dinâmica ===");
  console.log(gerarTabuada(7, 5));
  console.log(gerarTabuada(4));
}

if (require.main === module) demo();

module.exports = { gerarTabuada, demo };
