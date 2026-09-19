/**
 * QUESTÃO 7 — Contador de Vogais, Consoantes e Espaços
 */
function contarCaracteres(texto) {
  if (typeof texto !== "string") {
    throw new Error("A entrada deve ser uma string.");
  }

  const relatorio = {
    vogais: 0,
    consoantes: 0,
    espacos: 0,
    especiais: 0,
    total: texto.length,
  };

  // Remove acentos (normalize NFD + remove marcas diacríticas) para simplificar a checagem
  const textoSemAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const vogaisRegex = /[aeiouAEIOU]/;
  const letrasRegex = /[a-zA-Z]/;

  for (const char of textoSemAcentos) {
    if (char === " ") {
      relatorio.espacos++;
    } else if (vogaisRegex.test(char)) {
      relatorio.vogais++;
    } else if (letrasRegex.test(char)) {
      relatorio.consoantes++;
    } else {
      relatorio.especiais++;
    }
  }

  return relatorio;
}

function demo() {
  console.log("=== QUESTÃO 7 — Contador de Caracteres ===");
  console.log(contarCaracteres("Desenvolvimento de APIs REST!"));
}

if (require.main === module) demo();

module.exports = { contarCaracteres, demo };
