/**
 * QUESTÃO 8 — Gerador de Tokens e Códigos de Cupom
 */
function gerarTokenAleatorio(tamanho = 8, tipo = "alfanumerico") {
  const conjuntos = {
    numerico: "0123456789",
    letras: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    alfanumerico: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  };

  const caracteres = conjuntos[tipo];
  if (!caracteres) {
    throw new Error(`Tipo inválido: "${tipo}". Use "numerico", "letras" ou "alfanumerico".`);
  }

  let token = "";
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    token += caracteres[indiceAleatorio];
  }

  return token;
}

function demo() {
  console.log("=== QUESTÃO 8 — Gerador de Tokens ===");
  console.log(gerarTokenAleatorio(8, "alfanumerico"));
  console.log(gerarTokenAleatorio(6, "numerico"));
  console.log(gerarTokenAleatorio(10, "letras"));
}

if (require.main === module) demo();

module.exports = { gerarTokenAleatorio, demo };
