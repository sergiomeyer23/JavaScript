// ==========================================
// DESAFIO DE PRÁTICA DELIBERADA - CAPÍTULO 1
// Cole no VS Code / Console e execute
// ==========================================

console.log("--- TESTE 1: Limites de Precisão IEEE 754 ---");
// Por que isso não dá 0.3 exatamente? Observe o comportamento na memória.
console.log(0.1 + 0.2); 


console.log("\n--- TESTE 2: O Tipo Especial NaN ---");
// NaN significa "Not a Number". Mas qual é o tipo dele para o motor do JS?
console.log("Resultado de 'texto' * 2:", "texto" * 2);
console.log("Tipo de NaN:", typeof NaN);


console.log("\n--- TESTE 3: Valores Vazios (null vs undefined) ---");
// Ambos representam ausência de valor, mas veja como o JS os trata:
let caixinhaVazia;
console.log("Valor padrão de variável declarada sem valor:", caixinhaVazia);
console.log("Tipo de undefined:", typeof undefined);

// Bug histórico do JavaScript que você precisa saber que existe:
console.log("Tipo de null:", typeof null); 


console.log("\n--- TESTE 4: Coerção Implícita de Tipos ---");
// Entenda como o motor decide converter tipos dinamicamente quando você usa operadores
console.log("Operador de menos força número ('5' - 1):", "5" - 1);
console.log("Operador de mais concatena string ('5' + 1):", "5" + 1);
console.log("Multiplicação com valor vazio (8 * null):", 8 * null);


console.log("\n--- TESTE 5: Comparação Imprecisa (==) vs Precisa (===) ---");
// Entenda por que NUNCA usamos o '==' no desenvolvimento profissional
console.log("false é igual a 0 usando '==' ? ", false == 0);
console.log("false é igual a 0 usando '===' ? ", false === 0);
console.log("'' (string vazia) é igual a 0 com '==' ? ", "" == 0);