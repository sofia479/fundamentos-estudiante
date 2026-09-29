// ==========================================
// Práctica de Condicionales (if / else) y Funciones
// ==========================================

// Función para evaluar si una persona es mayor de edad
function evaluarEdad(nombrePersona, edadPersona) {
  if (edadPersona >= 18) {
    return `${nombrePersona} tiene ${edadPersona} años y es mayor de edad.`;
  } else {
    return `${nombrePersona} tiene ${edadPersona} años y es menor de edad.`;
  }
}

// Función para evaluar el estado del contador (positivo, negativo o cero)
function evaluarNumero(numero) {
  if (numero > 0) {
    return `El número ${numero} es POSITIVO.`;
  } else if (numero < 0) {
    return `El número ${numero} es NEGATIVO.`;
  } else {
    return "El número es CERO.";
  }
}

// Pruebas en consola
console.log("--- PRUEBAS DE CONDICIONALES ---");
console.log(evaluarEdad("Ana", 20));
console.log(evaluarEdad("Luis", 15));

console.log(evaluarNumero(5));
console.log(evaluarNumero(-3));
console.log(evaluarNumero(0));