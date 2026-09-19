# OAT 1 (Parte A) — Laboratório Prático de JavaScript

**Disciplina:** Desenvolvimento de APIs — 2026.2
**Curso:** Sistemas de Informação (Noturno)
**Docente:** Prof. Ramon da Paixão Muricy
**Discente:** João Paulo de Oliveira Carneiro
**Centro Universitário:** UNEX

Implementação dos 10 desafios práticos de JavaScript propostos na OAT 1 , cada um em um módulo separado dentro de `src/`, com testes de demonstração via `console.log`.

## 📁 Estrutura do projeto

```
oat1-javascript-apis/
├── README.md
├── package.json
├── .gitignore
├── index.js                          # roda a demonstração de todas as questões
└── src/
    ├── q1-contagem-regressiva.js     # Contador Regressivo para Datas
    ├── q2-calculadora-imc.js         # Calculadora de IMC com Classificação OMS
    ├── q3-tabuada.js                 # Tabuada Dinâmica e Formatada
    ├── q4-validador-usuario.js       # Validador de Dados de Cadastro
    ├── q5-analisador-numeros.js      # Analisador Estatístico de Array
    ├── q6-conversor-temperatura.js   # Conversor Celsius <-> Fahrenheit
    ├── q7-contador-caracteres.js     # Contador de Vogais/Consoantes/Espaços
    ├── q8-gerador-token.js           # Gerador de Tokens Aleatórios
    ├── q9-maior-palavra.js           # Localizador da Maior Palavra
    └── q10-distribuir-times.js       # Sorteador e Distribuidor de Times
```

## ▶️ Como executar

Requer apenas [Node.js](https://nodejs.org/) instalado (sem dependências externas).

**Rodar todas as questões de uma vez:**
```bash
node index.js
```
ou
```bash
npm start
```

**Rodar uma questão específica** (ex: Questão 3):
```bash
node src/q3-tabuada.js
```
ou
```bash
npm run q3
```

## 📋 Lista de questões

| # | Questão | Função principal | Arquivo |
|---|---------|-------------------|---------|
| 1 | Contador Regressivo para Datas | `calcularContagemRegressiva(dataFutura)` | [src/q1-contagem-regressiva.js](src/q1-contagem-regressiva.js) |
| 2 | Calculadora de IMC com Classificação OMS | `calcularIMC(peso, altura)` | [src/q2-calculadora-imc.js](src/q2-calculadora-imc.js) |
| 3 | Tabuada Dinâmica e Formatada | `gerarTabuada(numero, limite)` | [src/q3-tabuada.js](src/q3-tabuada.js) |
| 4 | Validador de Dados de Cadastro de Usuário | `validarUsuario(usuario)` | [src/q4-validador-usuario.js](src/q4-validador-usuario.js) |
| 5 | Analisador Estatístico de Números em Array | `analisarNumeros(arrayDeNumeros)` | [src/q5-analisador-numeros.js](src/q5-analisador-numeros.js) |
| 6 | Conversor Universal de Temperaturas | `celsiusParaFahrenheit` / `fahrenheitParaCelsius` | [src/q6-conversor-temperatura.js](src/q6-conversor-temperatura.js) |
| 7 | Contador de Vogais, Consoantes e Espaços | `contarCaracteres(texto)` | [src/q7-contador-caracteres.js](src/q7-contador-caracteres.js) |
| 8 | Gerador de Tokens e Códigos de Cupom | `gerarTokenAleatorio(tamanho, tipo)` | [src/q8-gerador-token.js](src/q8-gerador-token.js) |
| 9 | Localizador da Maior Palavra em Frases | `encontrarMaiorPalavra(frase)` | [src/q9-maior-palavra.js](src/q9-maior-palavra.js) |
| 10 | Sorteador e Distribuidor de Equipes / Times | `distribuirTimes(listaDeNomes, quantidadeDeTimes)` | [src/q10-distribuir-times.js](src/q10-distribuir-times.js) |

## 🧠 Conceitos aplicados

`Date` e manipulação de tempo, operadores matemáticos (`Math.floor`, `%`), parâmetros padrão do ES6, template literals, métodos de array (`reduce`, `filter`, `map`), expressões regulares, `normalize("NFD")` para remoção de acentos, `Math.random()`, algoritmo de Fisher-Yates e validação defensiva de entradas.
