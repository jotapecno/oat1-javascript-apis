/**
 * QUESTÃO 1 — Contador Regressivo para Datas
 * Recebe uma data futura e retorna dias/horas/minutos/segundos restantes.
 */
function calcularContagemRegressiva(dataFutura) {
  const alvo = new Date(dataFutura);
  const agora = new Date();

  if (isNaN(alvo.getTime())) {
    throw new Error("Data inválida fornecida.");
  }

  const diffMs = alvo.getTime() - agora.getTime();

  if (diffMs <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
      texto: "A data informada já passou!",
    };
  }

  const segundosTotais = Math.floor(diffMs / 1000);
  const dias = Math.floor(segundosTotais / 86400);
  const horas = Math.floor((segundosTotais % 86400) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  const texto = `Faltam ${dias} dias, ${horas}h, ${minutos}m e ${segundos}s`;

  return { dias, horas, minutos, segundos, texto };
}

// Demonstração — chamada diretamente ao rodar este arquivo, ou via index.js
function demo() {
  console.log("=== QUESTÃO 1 — Contagem Regressiva ===");
  console.log(calcularContagemRegressiva("2027-01-01T00:00:00"));
}

if (require.main === module) demo();

module.exports = { calcularContagemRegressiva, demo };
