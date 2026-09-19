/**
 * QUESTÃO 2 — Calculadora de IMC com Classificação OMS
 */
function calcularIMC(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number" || altura <= 0) {
    throw new Error("Peso e altura devem ser números válidos.");
  }

  const imcBruto = peso / (altura * altura);
  const imc = Math.round(imcBruto * 100) / 100;

  let classificacao;
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25.0) classificacao = "Peso normal";
  else if (imc < 30.0) classificacao = "Sobrepeso";
  else if (imc < 35.0) classificacao = "Obesidade Grau I";
  else if (imc < 40.0) classificacao = "Obesidade Grau II";
  else classificacao = "Obesidade Grau III";

  return { imc, classificacao };
}

function demo() {
  console.log("=== QUESTÃO 2 — Calculadora de IMC ===");
  console.log(calcularIMC(78.5, 1.75));
  console.log(calcularIMC(55, 1.7));
}

if (require.main === module) demo();

module.exports = { calcularIMC, demo };
