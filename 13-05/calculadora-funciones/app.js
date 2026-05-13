// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
  return a + b;
}

// Función resta
function restar(a, b) {
  return a - b;
}

// Función multiplicación
function multiplicar(a, b) {
  return a * b;
}

// Función división
function dividir(a, b) {

  if (b === 0) {
    return "No se puede dividir por cero";
  }

  return a / b;
}

// =====================================
// RETOS ADICIONALES
// =====================================

// Reto 1 — Potencia
function potencia(a, b) {
  return a ** b;
}

// Reto 2 — Número mayor
function mayor(a, b) {

  if (a > b) {
    return a;
  }

  return b;
}

// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 5));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 5));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 5));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 5));

console.log("----------------");

console.log("Resultado potencia:");
console.log(potencia(2, 3));

console.log("----------------");

console.log("Número mayor:");
console.log(mayor(20, 10));

console.log("----------------");

console.log("División entre cero:");
console.log(dividir(10, 0));