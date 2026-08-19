# Teoría fácil de HTML, CSS, JavaScript y React

## Diferencia rápida

| Tecnología | Función |
|---|---|
| HTML | Estructura. |
| CSS | Diseño y colores. |
| JavaScript | Lógica e interacción. |
| React | Interfaces con componentes. |

---

# 1. HTML

## ¿Qué es?

HTML significa **HyperText Markup Language**. Sirve para organizar el contenido de una página web mediante etiquetas. No es un lenguaje de programación.

## Estructura básica

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola</h1>
    <p>Mi primera página.</p>
  </body>
</html>
```

- `DOCTYPE` indica HTML5.
- `html` contiene todo.
- `head` contiene configuración.
- `title` es el nombre de la pestaña.
- `body` contiene lo visible.
- `h1` es el título principal y `p` es un párrafo.

## Etiquetas de estructura

| Etiqueta | Uso |
|---|---|
| `header` | Cabecera. |
| `nav` | Menú. |
| `main` | Contenido principal. |
| `section` | Grupo de contenido. |
| `article` | Noticia o contenido independiente. |
| `aside` | Contenido secundario. |
| `footer` | Pie de página. |
| `div` | Contenedor general. |

```html
<header><h1>Mi blog</h1></header>
<nav><a href="index.html">Inicio</a></nav>
<main>
  <section><h2>Noticias</h2></section>
</main>
<footer>Autor: Ana</footer>
```

Las etiquetas semánticas explican qué contiene cada parte.

## Código y texto

```html
<p>Usa <code>console.log()</code>.</p>
<pre><code>const nombre = "Ana";</code></pre>
<p>Pulsa <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
```

- `code`: código corto.
- `pre`: conserva espacios y saltos.
- `kbd`: tecla del teclado.
- `samp`: salida de un programa.
- `var`: variable.

Etiquetas de texto importantes:

| Etiqueta | Uso |
|---|---|
| `h1` | Título principal. |
| `h2` a `h6` | Títulos secundarios. |
| `p` | Párrafo. |
| `strong` | Texto importante. |
| `em` | Texto enfatizado. |
| `a` | Enlace. |
| `br` | Salto de línea. |

---

# 2. JavaScript

## ¿Qué es?

JavaScript es un lenguaje de programación. Permite hacer cálculos, responder a clics, validar formularios y cambiar la página.

## Variables

```js
let edad = 18;
edad = 19;                 // Puede cambiar.
const nombre = "Ana";     // No se reasigna.
var antiguo = true;       // Forma antigua.
```

Usa `const` si el valor no cambia y `let` si cambia. En código nuevo normalmente se evita `var`.

## Tipos de datos

```js
const texto = "Hola";                 // string
const numero = 20;                    // number
const activo = true;                  // boolean
let sinValor;                         // undefined
const vacio = null;                   // null
const persona = { nombre: "Ana" };    // object
const colores = ["rojo", "azul"];     // array
function sumar(a, b) { return a + b; } // function
```

## Ámbito

El ámbito indica dónde se puede usar una variable.

```js
const tienda = "Mi tienda"; // Global.

function mostrar() {
  const producto = "Libro"; // Local a la función.
  console.log(tienda, producto);
}
```

## Condiciones

Operadores: `===` igual, `!==` distinto, `>` mayor, `<` menor, `>=` mayor o igual y `<=` menor o igual.

```js
const nota = 7;
if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

`else if` sirve para probar otra condición. `switch` compara un valor con varios casos:

```js
switch (dia) {
  case "lunes": console.log("Inicio"); break;
  default: console.log("Otro día");
}
```

## Bucles

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

let intentos = 0;
while (intentos < 3) {
  intentos++;
}

do {
  console.log("Se ejecuta una vez");
} while (false);
```

`for` repite un número de veces. `while` repite mientras se cumpla una condición. `do...while` se ejecuta al menos una vez.

---

# 3. CSS

## ¿Qué es?

CSS significa **Cascading Style Sheets**. Cambia la apariencia de HTML: colores, tamaños, espacios, bordes y posiciones.

## Sintaxis

```css
selector {
  propiedad: valor;
}
```

```css
p {
  color: blue;
  font-size: 18px;
}
```

`p` es el selector, `color` es la propiedad y `blue` es el valor.

## Selectores

```css
p { color: green; }             /* Etiqueta */
.aviso { color: red; }          /* Clase */
#titulo { text-align: center; } /* ID */
* { box-sizing: border-box; }   /* Universal */
.menu p { color: navy; }        /* Descendiente */
.menu > li { display: block; }  /* Hijo directo */
h1, h2 { color: purple; }       /* Múltiple */
```

Una clase (`.aviso`) se puede repetir. Un ID (`#titulo`) normalmente es único. Para estilos reutilizables se prefieren las clases.

## Propiedades y modelo de caja

```css
.tarjeta {
  color: black;
  background-color: white;
  font-size: 16px;
  width: 300px;
  height: 150px;
  margin: 20px;
  padding: 15px;
  border: 1px solid gray;
  text-align: center;
  display: block;
}
```

El modelo de caja es: contenido, `padding` (espacio interior), `border` y `margin` (espacio exterior).

---

# 4. React

## ¿Qué es?

React es una biblioteca de JavaScript para crear interfaces usando **componentes**. Un componente puede ser un botón, una tarjeta o una página.

## Componentes y props

```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

function App() {
  return <Saludo nombre="Carlos" />;
}
```

`App` es el padre. `Saludo` es el hijo. `nombre` es un prop que pasa del padre al hijo. Los props son de solo lectura.

Un componente se parece a una etiqueta HTML personalizada, pero también puede tener lógica y datos.

## `useState`

Guarda información que puede cambiar.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Sumar
      </button>
    </section>
  );
}
```

- `contador`: valor actual.
- `setContador`: función para cambiarlo.
- `useState(0)`: empieza en cero.
- Al usar `setContador`, React actualiza la pantalla.

## `useEffect`

Ejecuta una acción después del renderizado. Sirve para efectos secundarios, como pedir datos o usar temporizadores.

```jsx
useEffect(() => {
  console.log("Una vez");
}, []);
```

Con `[]` se ejecuta al montar el componente.

```jsx
useEffect(() => {
  console.log("Cambió el nombre");
}, [nombre]);
```

Con `[nombre]` se ejecuta al inicio y cuando cambia `nombre`. Sin array se ejecuta después de cada renderizado.

| Hook | Función |
|---|---|
| `useState` | Guardar y cambiar datos. |
| `useEffect` | Ejecutar acciones después del renderizado. |

---

# 5. Ejemplo final

```jsx
import { useEffect, useState } from "react";

function ContadorUsuario({ nombre }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`Cambió el contador de ${nombre}`);
  }, [nombre, contador]);

  return (
    <main>
      <header><h1>Hola {nombre}</h1></header>
      <section>
        <p>Has pulsado {contador} veces.</p>
        <button onClick={() => setContador(contador + 1)}>
          Aumentar
        </button>
      </section>
    </main>
  );
}
```

Usa props, `useState`, `useEffect`, JSX, un botón y HTML semántico.

```css
main {
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: #eeeeee;
  text-align: center;
}
```

---

# 6. Resumen rápido para el examen

| Concepto | Para qué sirve |
|---|---|
| HTML | Estructura. |
| CSS | Apariencia. |
| JavaScript | Lógica. |
| React | Componentes. |
| Props | Pasar datos del padre al hijo. |
| `useState` | Guardar estado. |
| `useEffect` | Ejecutar efectos. |
| `let` | Variable que cambia. |
| `const` | Variable que no se reasigna. |
| `if` | Tomar decisiones. |
| `for` | Repetir instrucciones. |
| `while` | Repetir mientras una condición sea verdadera. |
| Selector CSS | Elegir elementos para darles estilo. |

## Preguntas de examen

1. **¿Qué es HTML?** La estructura de una página.
2. **¿Qué es CSS?** El diseño de una página.
3. **¿Qué es JavaScript?** El lenguaje que añade comportamiento.
4. **¿Qué es React?** Una biblioteca para crear interfaces.
5. **¿Qué hace `<p>`?** Crea un párrafo.
6. **¿Qué hace `<a>`?** Crea un enlace.
7. **¿Qué hace `<main>`?** Contiene lo principal.
8. **¿Qué diferencia hay entre clase e ID?** La clase se repite y el ID suele ser único.
9. **¿Cuándo se usa `let`?** Cuando el valor puede cambiar.
10. **¿Cuándo se usa `const`?** Cuando no se reasigna.
11. **¿Qué hace `if`?** Comprueba una condición.
12. **¿Qué hace `for`?** Repite código.
13. **¿Qué son los props?** Datos del padre para el hijo.
14. **¿Qué hace `useState`?** Guarda y cambia datos.
15. **¿Qué hace `useEffect`?** Ejecuta una acción después del renderizado.

## Conceptos para memorizar

- HTML = estructura.
- CSS = apariencia.
- JavaScript = comportamiento.
- React = componentes.
- `.` es clase y `#` es ID.
- `padding` está dentro del borde y `margin` fuera.
- `useState` guarda datos.
- `useEffect` ejecuta efectos.
- Los props van del padre al hijo y no se modifican directamente.
