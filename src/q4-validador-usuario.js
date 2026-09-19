/**
 * QUESTÃO 4 — Validador de Dados de Cadastro de Usuário
 */
function validarUsuario(usuario) {
  const erros = [];
  const { nome, email, senha } = usuario || {};

  if (!nome || nome.trim().length < 3) {
    erros.push("Nome deve ter pelo menos 3 caracteres");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    erros.push("E-mail inválido");
  }

  if (!senha || senha.length < 6) {
    erros.push("Senha deve ter pelo menos 6 caracteres");
  }
  if (senha && !/\d/.test(senha)) {
    erros.push("Senha deve conter ao menos 1 número");
  }

  if (erros.length > 0) {
    return { valido: false, erros };
  }
  return { valido: true };
}

function demo() {
  console.log("=== QUESTÃO 4 — Validador de Usuário ===");
  console.log(validarUsuario({ nome: "Al", email: "teste", senha: "123" }));
  console.log(validarUsuario({ nome: "Ana Souza", email: "ana@exemplo.com", senha: "senha123" }));
}

if (require.main === module) demo();

module.exports = { validarUsuario, demo };
