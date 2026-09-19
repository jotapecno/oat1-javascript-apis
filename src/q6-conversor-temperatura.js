/**
 * QUESTÃO 10 — Sorteador e Distribuidor de Equipes / Times
 */
function distribuirTimes(listaDeNomes, quantidadeDeTimes) {
  if (!Array.isArray(listaDeNomes) || !Number.isInteger(quantidadeDeTimes) || quantidadeDeTimes <= 0) {
    throw new Error("Parâmetros inválidos: informe uma lista de nomes e uma quantidade de times inteira e positiva.");
  }

  // Fisher-Yates shuffle
  const embaralhada = [...listaDeNomes];
  for (let i = embaralhada.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [embaralhada[i], embaralhada[j]] = [embaralhada[j], embaralhada[i]];
  }

  // Distribuição circular (operador de resto %)
  const times = Array.from({ length: quantidadeDeTimes }, () => []);
  embaralhada.forEach((nome, index) => {
    times[index % quantidadeDeTimes].push(nome);
  });

  return times;
}

function demo() {
  console.log("=== QUESTÃO 10 — Distribuição de Times ===");
  console.log(distribuirTimes(["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"], 2));
  console.log(distribuirTimes(["Ana", "Bruno", "Carlos", "Diana", "Eduardo"], 3));
}

if (require.main === module) demo();

module.exports = { distribuirTimes, demo };
