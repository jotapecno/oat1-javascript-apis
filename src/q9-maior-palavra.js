/**
 * QUESTÃO 9 — Localizador da Maior Palavra em Frases
 */
function encontrarMaiorPalavra(frase) {
  if (typeof frase !== "string") {
    throw new Error("A entrada deve ser uma string.");
  }

  // Remove pontuações e caracteres especiais comuns
  const fraseSanitizada = frase.replace(/[.,!?;:()"'-]/g, "");
  const palavras = fraseSanitizada.split(" ").filter((p) => p.length > 0);

  let maiorPalavra = "";
  for (const palavra of palavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }

  return { palavra: maiorPalavra, tamanho: maiorPalavra.length };
}

function demo() {
  console.log("=== QUESTÃO 9 — Maior Palavra da Frase ===");
  console.log(encontrarMaiorPalavra("O desenvolvimento de microsserviços e APIs é essencial."));
}

if (require.main === module) demo();

module.exports = { encontrarMaiorPalavra, demo };
