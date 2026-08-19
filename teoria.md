# Tarea de HTML, JavaScript, CSS y React

Este documento explica los conceptos fundamentales del desarrollo web con palabras sencillas. La idea es entender qué problema resuelve cada tecnología y cómo se relacionan entre sí.

## Diferencia general entre las tecnologías

| Tecnología | Función principal |
|---|---|
| HTML | Define la estructura y el contenido de la página. |
| CSS | Define la apariencia y la distribución visual. |
| JavaScript | Añade lógica, interacción y comportamiento. |
| React | Ayuda a construir interfaces usando componentes reutilizables. |

Una analogía útil es imaginar una casa:

- **HTML** es la estructura: paredes, puertas y habitaciones.
- **CSS** es la apariencia: colores, tamaños, espacios y decoración.
- **JavaScript** es el comportamiento: abrir una puerta, encender una luz o calcular un resultado.
- **React** es una forma organizada de construir muchas partes interactivas de la interfaz mediante componentes.

---

# 1. HTML

## 1.1 ¿Qué es HTML?

HTML significa **HyperText Markup Language**, es decir, **Lenguaje de Marcado de Hipertexto**. No es un lenguaje de programación: es un lenguaje de marcado que utiliza etiquetas para describir el significado y la estructura del contenido.

HTML sirve para indicar al navegador qué contenido existe en una página: títulos, párrafos, imágenes, enlaces, formularios, listas, tablas y secciones. El navegador lee esas etiquetas y crea la estructura visible de la página.

Por ejemplo, HTML puede decir: «este texto es un título» o «este elemento es un enlace». CSS se encarga después de decidir cómo se ve, y JavaScript puede modificarlo o reaccionar a las acciones del usuario.

## 1.2 Estructura básica de un documento HTML

Una página HTML actual suele comenzar con esta estructura:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página</title>
  </head>
  <body>
    <header>
      <h1>Aprendiendo HTML</h1>
    </header>
    <main>
      <p>Esta es mi primera página web.</p>
    </main>
  </body>
</html>
```

### Explicación línea por línea

1. `<!DOCTYPE html>` informa al navegador de que se utiliza HTML5.
2. `<html lang="es">` es el elemento raíz. `lang="es"` indica que el idioma principal es español.
3. `<head>` contiene información de configuración que normalmente no se muestra como contenido de la página.
4. `<meta charset="UTF-8">` permite representar correctamente letras con tildes y otros caracteres.
5. `<meta name="viewport" ...>` ayuda a que la página se adapte a pantallas pequeñas, como las de los móviles.
6. `<title>` define el título que aparece en la pestaña del navegador.
7. `</head>` cierra la cabecera del documento.
8. `<body>` contiene todo el contenido que el usuario puede ver e interpretar.
9. `<header>` agrupa la cabecera visible de esta página.
10. `<h1>` representa el título principal.
11. `</header>` cierra la cabecera.
12. `<main>` contiene el contenido principal y único de la página.
13. `<p>` representa un párrafo.
14. `</main>` cierra el contenido principal.
15. `</body>` cierra el contenido visible.
16. `</html>` cierra el documento HTML.

Las etiquetas suelen tener apertura y cierre: `<p>Texto</p>`. Algunas, como `<meta>` o `<img>`, no necesitan un cierre porque no contienen texto hijo.

## 1.3 Etiquetas de estructura

Las etiquetas semánticas explican qué papel cumple cada zona. Esto mejora la accesibilidad, el mantenimiento y la comprensión del documento.

| Etiqueta | Para qué sirve | Cuándo utilizarla |
|---|---|---|
| `<header>` | Cabecera de una página o sección. | Para logos, títulos o introducciones. |
| `<nav>` | Grupo de enlaces de navegación. | Para menús y enlaces principales. |
| `<main>` | Contenido principal del documento. | Una sola vez por página, normalmente. |
| `<section>` | Agrupa contenido relacionado por tema. | Cuando una parte tiene su propio tema o título. |
| `<article>` | Contenido independiente que podría reutilizarse. | Noticias, publicaciones, comentarios o fichas. |
| `<aside>` | Contenido relacionado pero secundario. | Barras laterales, recomendaciones o notas. |
| `<footer>` | Pie de una página o sección. | Para autoría, contacto o enlaces legales. |
| `<div>` | Contenedor genérico sin significado semántico. | Cuando no existe una etiqueta semántica adecuada. |

Ejemplo:

```html
<header>
  <h1>Mi blog</h1>
  <nav>
    <a href="/">Inicio</a>
    <a href="/contacto">Contacto</a>
  </nav>
</header>
<main>
  <section>
    <h2>Noticias</h2>
    <article>
      <h3>Nuevo artículo</h3>
      <p>Contenido de la publicación.</p>
    </article>
  </section>
  <aside>También puede interesarte este enlace.</aside>
</main>
<footer>Autor: Ana</footer>
```

`header` presenta el sitio, `nav` contiene la navegación, `main` encierra lo más importante, `section` agrupa un tema, `article` contiene una publicación independiente, `aside` aporta información secundaria y `footer` cierra el sitio. Las etiquetas de cierre siguen el orden inverso al de apertura.

## 1.4 Etiquetas para agregar o representar código

HTML tiene etiquetas específicas para mostrar código de forma correcta:

- `<code>` representa un fragmento corto de código dentro de una línea.
- `<pre>` conserva espacios y saltos de línea. Es útil para bloques de código o texto con formato fijo.
- `<kbd>` representa una tecla o combinación que debe pulsar el usuario.
- `<samp>` representa una salida producida por un programa.
- `<var>` representa una variable.

```html
<p>Para mostrar un título se escribe <code>&lt;h1&gt;Título&lt;/h1&gt;</code>.</p>
<pre><code>const nombre = "Lucía";
console.log(nombre);</code></pre>
<p>Pulsa <kbd>Ctrl</kbd> + <kbd>S</kbd> para guardar.</p>
<p>El programa muestra: <samp>Proceso terminado</samp></p>
<p>La variable <var>total</var> contiene el resultado.</p>
```

En el primer caso, `&lt;` y `&gt;` son entidades HTML que permiten mostrar los signos `<` y `>` sin que el navegador los interprete como etiquetas. `pre` mantiene el salto de línea del bloque, `code` comunica que el contenido es código, `kbd` identifica teclas, `samp` una salida y `var` una variable.

## 1.5 Cinco etiquetas de texto

### `<p>`: párrafo

- **Qué hace:** representa un bloque de texto.
- **Para qué se utiliza:** para escribir explicaciones, descripciones o cualquier texto normal.
- **Ejemplo:**

```html
<p>HTML organiza el contenido de una página.</p>
```

- **Resultado:** el navegador muestra el texto como un párrafo separado.

### `<strong>`: importancia

- **Qué hace:** indica que un texto es especialmente importante.
- **Para qué se utiliza:** para advertencias o palabras que deben recibir énfasis semántico.
- **Ejemplo:**

```html
<p><strong>Importante:</strong> guarda tus cambios.</p>
```

- **Resultado:** normalmente se muestra en negrita, pero su importancia también puede ser comunicada por lectores de pantalla.

### `<em>`: énfasis

- **Qué hace:** marca énfasis en una palabra o frase.
- **Para qué se utiliza:** para cambiar la intención o destacar una parte de la oración.
- **Ejemplo:**

```html
<p>Debes leer <em>todo</em> el enunciado.</p>
```

- **Resultado:** normalmente se muestra en cursiva y se interpreta como una palabra enfatizada.

### `<a>`: enlace

- **Qué hace:** crea un hipervínculo hacia otra dirección.
- **Para qué se utiliza:** para navegar a otras páginas, secciones o recursos.
- **Ejemplo:**

```html
<a href="https://developer.mozilla.org/">Consultar documentación</a>
```

- **Resultado:** aparece un enlace seleccionable. `href` contiene el destino.

### `<br>`: salto de línea

- **Qué hace:** inserta un salto de línea.
- **Para qué se utiliza:** en casos concretos como direcciones o poemas donde el salto forma parte del contenido. No debe usarse para crear espacios de diseño; para eso se utiliza CSS.
- **Ejemplo:**

```html
<p>Calle Mayor 10<br>28001 Madrid</p>
```

- **Resultado:** `28001 Madrid` aparece en la línea siguiente.

Otras etiquetas frecuentes son `<h1>` para el título principal, `<h2>` para un título de segundo nivel, y `<h3>` a `<h6>` para niveles progresivamente más específicos. No se elige un encabezado por su tamaño visual, sino por la jerarquía del contenido. CSS puede cambiar su tamaño.

---

# 2. JavaScript

## 2.1 ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que permite añadir lógica e interacción a una página. Puede responder a clics, validar formularios, hacer cálculos, modificar el contenido, solicitar datos a un servidor y controlar estados de una aplicación.

La relación puede recordarse así:

- **HTML = estructura:** define qué elementos existen.
- **CSS = apariencia:** define colores, tamaños y distribución.
- **JavaScript = comportamiento y lógica:** decide qué ocurre cuando cambia algo.

Por ejemplo, HTML crea un botón, CSS lo hace atractivo y JavaScript puede mostrar un mensaje cuando se pulsa.

## 2.2 Variables

Una variable es un nombre que permite guardar un valor para utilizarlo después.

### `let`

`let` declara una variable cuyo valor puede cambiar.

```js
let edad = 18;
edad = 19;
console.log(edad); // 19
```

La primera línea guarda `18`. La segunda sustituye ese valor por `19`. `let` tiene ámbito de bloque y suele ser la elección adecuada cuando sabemos que el valor cambiará.

### `const`

`const` declara una referencia que no puede reasignarse.

```js
const pais = "España";
console.log(pais); // España
```

No se puede hacer `pais = "México"`. `const` debe ser la opción predeterminada cuando la variable no necesita recibir otro valor. En objetos y arrays, `const` impide cambiar la referencia, aunque el contenido interno puede modificarse.

```js
const colores = ["rojo"];
colores.push("azul"); // Correcto: cambia el contenido del array.
```

### `var`

`var` es la forma antigua de declarar variables. Tiene ámbito de función y permite redeclaraciones, lo que puede provocar errores difíciles de detectar.

```js
var mensaje = "Hola";
var mensaje = "Adiós"; // Permitido, pero suele ser poco recomendable.
```

En código moderno se prefieren `const` y `let`: `const` si no se reasigna y `let` si sí se reasigna. `var` aparece sobre todo en código antiguo.

| Declaración | ¿Se puede reasignar? | Ámbito habitual | Recomendación |
|---|---:|---|---|
| `let` | Sí | Bloque | Usarla cuando el valor cambia. |
| `const` | No | Bloque | Usarla como opción predeterminada. |
| `var` | Sí | Función | Evitarla en código nuevo. |

## 2.3 Tipos de datos

### String

Un `string` es una cadena de caracteres, es decir, texto.

```js
const nombre = "Marta";
```

### Number

`number` representa números enteros y decimales.

```js
const precio = 12.5;
```

### Boolean

Un `boolean` solo puede ser `true` o `false`. Se usa mucho en condiciones.

```js
const tieneCuenta = true;
```

### Undefined

`undefined` significa que una variable existe, pero todavía no tiene un valor asignado.

```js
let resultado;
console.log(resultado); // undefined
```

### Null

`null` representa intencionadamente la ausencia de un valor.

```js
const usuarioSeleccionado = null;
```

La diferencia práctica es que `undefined` suele indicar «no se ha asignado», mientras que `null` comunica «se ha dejado vacío de forma intencionada».

### Object

Un `object` agrupa propiedades relacionadas mediante pares `clave: valor`.

```js
const persona = {
  nombre: "Luis",
  edad: 21
};
console.log(persona.nombre); // Luis
```

### Array

Un array es una colección ordenada de valores. Sus posiciones comienzan en cero.

```js
const frutas = ["manzana", "pera"];
console.log(frutas[0]); // manzana
```

### Function

Una función es un bloque reutilizable de instrucciones. Puede recibir datos y devolver un resultado.

```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(2, 3)); // 5
```

`a` y `b` son parámetros; `2` y `3` son argumentos; `return` devuelve el resultado.

## 2.4 Variables globales y ámbito

El **ámbito** o *scope* es la zona del programa donde una variable puede utilizarse. Una variable global se declara fuera de funciones o bloques y puede ser accesible desde muchos lugares. Una variable local se declara dentro de una función o bloque y solo está disponible allí.

```js
const aplicacion = "Tienda"; // Variable global del archivo.

function mostrarProducto() {
  const producto = "Libro"; // Variable local de la función.
  console.log(aplicacion); // Puede acceder a la global.
  console.log(producto); // Puede acceder a su propia local.
}

mostrarProducto();
// console.log(producto); // Error: está fuera de su ámbito.
```

Conviene limitar el alcance de las variables. Las variables globales pueden ser modificadas accidentalmente por distintas partes del programa y crear dependencias difíciles de seguir.

Los bloques también crean ámbito para `let` y `const`:

```js
if (true) {
  const mensaje = "Solo dentro del bloque";
  console.log(mensaje);
}
// mensaje no está disponible aquí.
```

## 2.5 Estructuras de flujo

Las estructuras de flujo controlan el orden en que se ejecutan las instrucciones. Una condición suele producir `true` o `false`.

Operadores de comparación básicos:

| Operador | Significado | Ejemplo |
|---|---|---|
| `===` | Igualdad estricta | `edad === 18` |
| `!==` | Desigualdad estricta | `rol !== "admin"` |
| `>` | Mayor que | `nota > 5` |
| `<` | Menor que | `temperatura < 0` |
| `>=` | Mayor o igual | `puntos >= 100` |
| `<=` | Menor o igual | `stock <= 0` |

También existen operadores lógicos: `&&` significa «y», `||` significa «o» y `!` niega un valor booleano. En código real, `===` y `!==` suelen ser preferibles a `==` y `!=` porque no convierten tipos automáticamente.

### `if`

Ejecuta un bloque cuando una condición es verdadera.

```js
const edad = 20;
if (edad >= 18) {
  console.log("Puede entrar");
}
```

Como `20 >= 18` es verdadero, se ejecuta `console.log`.

### `else`

Permite ejecutar una alternativa cuando el `if` es falso.

```js
const tieneEntrada = false;
if (tieneEntrada) {
  console.log("Bienvenido");
} else {
  console.log("Necesitas una entrada");
}
```

Solo uno de los dos bloques se ejecuta.

### `else if`

Permite comprobar varias condiciones en orden.

```js
const nota = 7;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}
```

Se comprueba primero la nota más alta; si no se cumple, se prueba la siguiente.

### `switch`

Compara un valor con varios casos concretos.

```js
const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Comienza la semana");
    break;
  case "viernes":
    console.log("Casi es fin de semana");
    break;
  default:
    console.log("Día normal");
}
```

`case` define una posibilidad, `break` evita continuar con los casos siguientes y `default` se ejecuta si no coincide ninguno.

### `for`

Repite instrucciones un número normalmente conocido de veces.

```js
for (let numero = 1; numero <= 3; numero++) {
  console.log(numero);
}
```

La inicialización crea `numero`, la condición permite continuar mientras sea verdadera y `numero++` aumenta el contador en cada vuelta. Se muestran `1`, `2` y `3`.

### `while`

Repite mientras una condición sea verdadera. La condición se comprueba antes de cada vuelta.

```js
let intentos = 0;
while (intentos < 3) {
  console.log("Intento", intentos + 1);
  intentos++;
}
```

Es importante cambiar algo dentro del bucle; de lo contrario, la condición podría no dejar de ser verdadera.

### `do...while`

Se parece a `while`, pero ejecuta el bloque una vez antes de comprobar la condición.

```js
let numero = 5;
do {
  console.log(numero);
  numero++;
} while (numero < 5);
```

Aunque `numero < 5` es falso desde el principio, el `5` se muestra una vez.

---

# 3. CSS

## 3.1 ¿Qué es CSS?

CSS significa **Cascading Style Sheets**, o **Hojas de Estilo en Cascada**. Es el lenguaje que describe la apariencia de los elementos HTML: colores, tipografías, tamaños, espacios, bordes, posiciones y distribución.

HTML responde a «¿qué es este contenido?». CSS responde a «¿cómo debe verse?». Separar contenido y presentación facilita cambiar el diseño sin reescribir la estructura.

## 3.2 Sintaxis de CSS

La forma básica es:

```css
selector {
  propiedad: valor;
}
```

- **Selector:** indica qué elementos se quieren modificar.
- **Propiedad:** indica qué aspecto se cambia, por ejemplo `color`.
- **Valor:** indica el nuevo valor, por ejemplo `blue`.

Ejemplo:

```css
p {
  color: darkgreen;
  font-size: 18px;
}
```

`p` selecciona todos los párrafos. `color` cambia el color del texto a verde oscuro y `font-size` establece un tamaño de 18 píxeles. Cada declaración termina en `;`.

## 3.3 Selectores CSS

### Selector por etiqueta

Selecciona todos los elementos de ese tipo.

```html
<p>Uno</p>
<p>Dos</p>
```

```css
p {
  color: navy;
}
```

Los dos párrafos tendrán texto azul marino.

### Selector por clase

Selecciona elementos que tengan una clase. Se escribe con punto.

```html
<p class="aviso">Revisa los datos.</p>
<p>Texto normal.</p>
```

```css
.aviso {
  color: crimson;
}
```

Solo el elemento con `class="aviso"` se vuelve rojo. Una misma clase puede reutilizarse en muchos elementos.

### Selector por ID

Selecciona el elemento que tiene un identificador concreto. Se escribe con `#`.

```html
<h1 id="titulo-principal">Mi página</h1>
```

```css
#titulo-principal {
  text-align: center;
}
```

Un `id` debe ser único dentro del documento. Una **clase** representa un grupo reutilizable; un **id** identifica normalmente un elemento concreto. Para estilos reutilizables suele convenir una clase.

### Selector universal

El selector `*` selecciona todos los elementos.

```css
* {
  box-sizing: border-box;
}
```

Esta regla hace que el ancho y alto incluyan el contenido, el relleno y el borde, lo que suele facilitar el cálculo del tamaño.

### Selector descendiente

Selecciona elementos que estén dentro de otro elemento, aunque no sean hijos directos.

```html
<section class="noticias">
  <div>
    <p>Noticia importante</p>
  </div>
</section>
```

```css
.noticias p {
  font-weight: bold;
}
```

Selecciona el párrafo que está dentro de `.noticias`, incluso porque hay un `div` entre ambos.

### Selector de elementos hijos

El símbolo `>` selecciona solo hijos directos.

```html
<ul class="menu">
  <li>Inicio</li>
  <li><span>Ayuda</span></li>
</ul>
```

```css
.menu > li {
  display: inline-block;
}
```

Selecciona los dos `li`, porque son hijos directos de `ul`. No selecciona el `span`.

### Selector múltiple

Una coma permite aplicar las mismas reglas a varios selectores.

```css
h1, h2, .destacado {
  color: darkslateblue;
}
```

Todos los `h1`, `h2` y elementos con clase `destacado` reciben ese color.

## 3.4 Modificación de elementos

```html
<article class="tarjeta">
  <h2>Producto</h2>
  <p>Descripción breve.</p>
</article>
```

```css
.tarjeta {
  color: #222;
  background-color: #f2f2f2;
  font-size: 16px;
  font-family: Arial, sans-serif;
  width: 300px;
  height: 180px;
  margin: 20px auto;
  padding: 16px;
  border: 1px solid #cccccc;
  text-align: center;
  display: block;
}
```

- `color` cambia el color del texto.
- `background-color` cambia el fondo.
- `font-size` cambia el tamaño de la letra.
- `font-family` indica la tipografía preferida y alternativas.
- `width` y `height` definen ancho y alto.
- `margin` crea espacio exterior.
- `padding` crea espacio interior.
- `border` dibuja un borde.
- `text-align` alinea el texto.
- `display` define cómo participa el elemento en el diseño. `block` ocupa una línea disponible; otros valores frecuentes son `inline`, `inline-block` y `flex`.

### El modelo de caja: margin y padding

El navegador trata cada elemento como una caja formada, de dentro hacia fuera, por:

1. **Contenido:** el texto o los elementos internos.
2. **Padding:** espacio entre el contenido y el borde.
3. **Border:** línea que rodea la caja.
4. **Margin:** espacio exterior que separa esta caja de otras.

Una comparación sencilla: el `padding` es el espacio dentro de una caja de regalo, alrededor del objeto; el `margin` es la distancia entre esa caja y las demás. El padding aumenta el espacio interior y el margin separa elementos.

---

# 4. React

## 4.1 ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario. Permite dividir una pantalla en partes pequeñas llamadas **componentes** y describir qué debe mostrar cada una según sus datos.

Un componente puede representar un botón, una tarjeta, una barra de navegación o una pantalla completa. Al reutilizar componentes, el código queda más organizado y resulta más fácil mantener aplicaciones grandes. React usa JSX con frecuencia: una sintaxis que permite escribir una estructura parecida a HTML dentro de JavaScript.

## 4.2 Componentes

Un componente funcional es una función que devuelve una interfaz, normalmente escrita con JSX.

```jsx
function Saludo() {
  return <h1>Hola mundo</h1>;
}
```

1. `function Saludo()` declara una función llamada `Saludo`.
2. El nombre empieza con mayúscula porque React lo interpreta como un componente.
3. `return` indica qué interfaz debe producir.
4. `<h1>Hola mundo</h1>` es JSX y representa un título.
5. El componente no recibe datos en este ejemplo.

Para utilizarlo se escribe como una etiqueta:

```jsx
<Saludo />
```

La etiqueta crea una instancia visual del componente. En una aplicación real se incluiría dentro del `return` de otro componente, como `<main><Saludo /></main>`.

## 4.3 Analogía entre componentes React y etiquetas HTML

«Un componente de React puede compararse con una etiqueta HTML personalizada» porque ambos pueden aparecer como una unidad dentro de una estructura. Por ejemplo, `<Saludo />` recuerda visualmente a `<section>`.

Tienen en común que:

- Representan una parte de la interfaz.
- Pueden anidarse dentro de otros elementos.
- Se escriben con una sintaxis de etiquetas en JSX.

Se diferencian en que una etiqueta HTML pertenece al estándar del navegador y describe estructura o contenido, mientras que un componente React es una función creada por el desarrollador. El componente puede recibir props, guardar estado, ejecutar efectos y decidir qué mostrar.

```jsx
function BotonAviso() {
  function mostrarAviso() {
    alert("Has pulsado el botón");
  }

  return <button onClick={mostrarAviso}>Pulsar</button>;
}
```

`BotonAviso` parece una etiqueta personalizada cuando se usa como `<BotonAviso />`, pero contiene una función y comportamiento. `onClick` conecta el clic con `mostrarAviso`.

## 4.4 Props

Los **props** son datos que un componente padre pasa a un componente hijo. Son parecidos a los argumentos que una función recibe.

```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

function App() {
  return <Saludo nombre="Carlos" />;
}
```

- `App` es el componente padre porque utiliza a `Saludo`.
- `Saludo` es el componente hijo porque recibe información del padre.
- `nombre` es el prop.
- `{ nombre }` extrae la propiedad `nombre` del objeto de props.
- `nombre="Carlos"` envía el valor `Carlos`.
- `{nombre}` inserta ese valor dentro del JSX.

El resultado es `Hola Carlos`. Los props son de solo lectura: el hijo no debe modificarlos. Si necesita cambiar información, el padre puede pasarle una función para solicitar ese cambio. La comparación con JavaScript es directa:

```js
function saludar(nombre) {
  return `Hola ${nombre}`;
}
```

Aquí `nombre` es un argumento; en React, un prop cumple una función similar para comunicar datos al componente.

## 4.5 `useState`

`useState` es un hook de React que permite guardar información que puede cambiar durante la vida del componente.

```jsx
const [contador, setContador] = useState(0);
```

- `useState(0)` crea un estado cuyo valor inicial es `0`.
- `contador` contiene el valor actual.
- `setContador` es la función que solicita cambiar ese valor.
- La desestructuración obtiene ambos elementos del array que devuelve el hook.

No debemos hacer `contador = contador + 1`, porque React no detectaría correctamente ese cambio ni actualizaría la interfaz. Debemos usar el actualizador:

```jsx
setContador(contador + 1);
```

Cuando se llama a `setContador`, React guarda el nuevo valor y vuelve a renderizar el componente. Así el JSX se calcula de nuevo y muestra el contador actualizado.

Componente completo:

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <section>
      <p>Has pulsado {contador} veces.</p>
      <button onClick={() => setContador(contador + 1)}>
        Sumar
      </button>
    </section>
  );
}

export default Contador;
```

`useState` se importa, se crea el estado dentro del componente y el botón llama al actualizador. Cada clic aumenta el valor y provoca una nueva representación del párrafo.

## 4.6 `useEffect`

Un efecto secundario es una operación relacionada con algo externo al cálculo directo de la interfaz: escribir en la consola, cambiar el título del documento, consultar una API, iniciar un temporizador o suscribirse a eventos.

`useEffect` permite ejecutar una función después de que React haya renderizado el componente. Su forma general es:

```jsx
useEffect(() => {
  // efecto secundario
  return () => {
    // limpieza opcional
  };
}, [dependencias]);
```

### Array vacío

```jsx
useEffect(() => {
  console.log("Se ejecutó");
}, []);
```

Después del primer renderizado, React ejecuta el efecto. El array vacío significa que no depende de valores que cambien, por lo que no vuelve a ejecutarse en renderizados posteriores del componente. En desarrollo, algunas configuraciones pueden ejecutar procesos adicionales para ayudar a detectar errores; el código debe tolerarlo.

### Una variable en dependencias

```jsx
useEffect(() => {
  console.log("Cambió el nombre");
}, [nombre]);
```

React ejecuta el efecto después del primer renderizado y después de cada renderizado en el que `nombre` tenga un valor distinto al anterior. Si cambia otra variable que no está en el array, este efecto no reacciona a ella. Las dependencias utilizadas dentro del efecto deben declararse correctamente.

### Sin array de dependencias

```jsx
useEffect(() => {
  console.log("Se ejecuta después de cada renderizado");
});
```

Al no incluir array, el efecto se ejecuta después de cada renderizado. Puede ser válido, pero debe usarse con cuidado porque un efecto que actualiza estado en cada renderizado puede causar un ciclo repetido.

Un efecto puede devolver una función de limpieza. Por ejemplo, un temporizador debe detenerse cuando el componente deja de utilizarse. Los efectos no sustituyen a todas las funciones: se reservan para sincronizar con sistemas externos al renderizado.

## 4.7 Diferencia entre `useState` y `useEffect`

| Aspecto | `useState` | `useEffect` |
|---|---|---|
| Función | Guarda información o estado. | Ejecuta efectos secundarios. |
| Uso principal | Representar datos que cambian. | Sincronizar con consola, API, temporizadores o navegador. |
| Actualización | Su actualizador cambia el estado. | Sus dependencias deciden cuándo se ejecuta. |
| Interfaz | Cambiar el estado provoca un nuevo renderizado. | Se ejecuta después del renderizado según sus dependencias. |
| Ejemplo | `const [n, setN] = useState(0)` | `useEffect(() => {...}, [n])` |

En resumen, `useState` guarda un dato; `useEffect` realiza una acción relacionada con el ciclo de renderizado y con valores externos.

---

# 5. Ejemplo final

Este componente combina props, `useState`, `useEffect`, JSX, un botón, HTML semántico y CSS básico.

### Componente React

```jsx
import { useEffect, useState } from "react";
import "./Contador.css";

function ContadorUsuario({ nombre }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El contador de ${nombre} cambió a ${contador}`);
  }, [nombre, contador]);

  function aumentarContador() {
    setContador((valorActual) => valorActual + 1);
  }

  return (
    <main className="contador">
      <header>
        <h1>Contador de {nombre}</h1>
      </header>
      <section aria-labelledby="titulo-contador">
        <h2 id="titulo-contador">Pulsaciones</h2>
        <p>Has pulsado el botón {contador} veces.</p>
        <button type="button" onClick={aumentarContador}>
          Aumentar
        </button>
      </section>
    </main>
  );
}

export default ContadorUsuario;
```

### Uso del componente

```jsx
<ContadorUsuario nombre="Carlos" />
```

### CSS básico

```css
.contador {
  width: min(90%, 420px);
  margin: 32px auto;
  padding: 24px;
  color: #202020;
  background-color: #f4f7fb;
  border: 1px solid #c9d4e2;
  text-align: center;
  font-family: Arial, sans-serif;
}

.contador button {
  padding: 10px 16px;
  color: white;
  background-color: #1769aa;
  border: 0;
  cursor: pointer;
}
```

### Explicación línea por línea

1. `import { useEffect, useState } ...` importa los dos hooks necesarios.
2. `import "./Contador.css"` incorpora los estilos del componente.
3. `function ContadorUsuario({ nombre })` crea un componente hijo que recibe el prop `nombre`.
4. `useState(0)` establece un contador inicial en cero.
5. `contador` es el valor visible y `setContador` lo actualiza.
6. `useEffect` registra un efecto secundario después del renderizado.
7. La plantilla de texto muestra el nombre y el valor actual en la consola.
8. `[nombre, contador]` indica que el efecto reacciona a cambios en cualquiera de esos valores.
9. `aumentarContador` es una función que se ejecutará al pulsar el botón.
10. `setContador((valorActual) => valorActual + 1)` usa el valor más reciente y le suma uno.
11. `<main>` representa el contenido principal de la interfaz.
12. `<header>` agrupa la cabecera y `<h1>` muestra el nombre recibido por props.
13. `<section>` agrupa la parte relacionada con las pulsaciones.
14. `aria-labelledby` relaciona la sección con su título y ayuda a la accesibilidad.
15. `<p>` muestra el estado actual del contador.
16. `onClick={aumentarContador}` conecta el botón con la función.
17. `type="button"` indica que es un botón normal, especialmente importante dentro de formularios.
18. Cada clic llama a `setContador`, React vuelve a renderizar y el texto se actualiza.
19. El archivo CSS establece el ancho, espacios, colores, borde, tipografía y apariencia del botón.

---

# 6. Resumen para examen

## Resumen rápido para el examen

| Concepto | ¿Para qué sirve? |
|---|---|
| HTML | Organizar el contenido y la estructura de una página. |
| CSS | Aplicar estilos, tamaños, colores y distribución. |
| JavaScript | Añadir lógica, cálculos e interacción. |
| React | Construir interfaces mediante componentes reutilizables. |
| Componentes | Dividir una interfaz en piezas independientes y reutilizables. |
| Props | Pasar datos de un componente padre a un hijo. |
| `useState` | Guardar y actualizar datos que cambian en un componente. |
| `useEffect` | Ejecutar efectos secundarios después del renderizado. |
| `let` | Declarar una variable que puede reasignarse. |
| `const` | Declarar una referencia que no puede reasignarse. |
| `if` | Ejecutar código si una condición es verdadera. |
| `for` | Repetir código siguiendo una inicialización, condición y actualización. |
| `while` | Repetir código mientras una condición sea verdadera. |
| Selector CSS | Elegir los elementos HTML a los que se aplicarán reglas. |

## Preguntas que podrían aparecer en el examen

1. **¿Qué significa HTML?** Significa HyperText Markup Language y define la estructura del contenido web.
2. **¿HTML es un lenguaje de programación?** No, es un lenguaje de marcado.
3. **¿Para qué sirve `<!DOCTYPE html>`?** Indica que el documento utiliza HTML5.
4. **¿Qué contiene normalmente `<head>`?** Metadatos, configuración, título y enlaces a recursos.
5. **¿Qué diferencia hay entre `<main>` y `<div>`?** `main` tiene significado semántico para el contenido principal; `div` es un contenedor genérico.
6. **¿Qué significa CSS?** Cascading Style Sheets, hojas de estilo en cascada.
7. **¿Qué diferencia hay entre una clase y un ID en CSS?** Una clase se reutiliza en varios elementos y se selecciona con `.`, mientras un ID identifica normalmente uno y se selecciona con `#`.
8. **¿Qué es el padding?** El espacio interior entre el contenido y el borde.
9. **¿Qué es el margin?** El espacio exterior que separa un elemento de otros.
10. **¿Qué es JavaScript?** Un lenguaje de programación que añade comportamiento y lógica a las páginas y aplicaciones.
11. **¿Cuándo se usa `const` y cuándo `let`?** `const` cuando no se reasigna la variable y `let` cuando su valor debe cambiar.
12. **¿Qué es una variable global?** Una variable declarada en un ámbito amplio y accesible desde distintas partes permitidas del programa.
13. **¿Para qué sirve `if`?** Para ejecutar instrucciones solo cuando una condición se cumple.
14. **¿Qué diferencia hay entre `while` y `do...while`?** `while` puede no ejecutarse nunca; `do...while` se ejecuta al menos una vez.
15. **¿Qué es React?** Una biblioteca de JavaScript para construir interfaces mediante componentes.
16. **¿Qué es un componente?** Una función reutilizable que devuelve una parte de la interfaz.
17. **¿Qué son los props?** Datos que un componente padre envía a un componente hijo; el hijo los recibe como propiedades de un objeto.
18. **¿Se deben modificar directamente los props?** No. Son de solo lectura.
19. **¿Qué devuelve `useState(0)`?** Un valor de estado inicial y una función para actualizarlo.
20. **¿Por qué se usa `setContador` en vez de cambiar `contador` directamente?** Porque React necesita el actualizador para registrar el cambio y volver a renderizar.
21. **¿Qué es un efecto secundario?** Una operación externa al cálculo directo de la interfaz, como una petición, un temporizador o un `console.log`.
22. **¿Qué significa `useEffect(..., [])`?** El efecto se ejecuta después del primer renderizado y no depende de cambios posteriores.
23. **¿Qué significa `[nombre]` en `useEffect`?** El efecto se ejecuta al iniciar y cuando cambia `nombre`.
24. **¿Qué ocurre si se omite el array de dependencias?** El efecto se ejecuta después de cada renderizado.
25. **¿Qué es JSX?** Una sintaxis usada en React para escribir una estructura parecida a HTML dentro de JavaScript.

## Conceptos que debo memorizar

- HTML define la estructura; CSS define el aspecto; JavaScript define la lógica y la interacción.
- Un documento HTML tiene `DOCTYPE`, `html`, `head` y `body`.
- Las etiquetas semánticas comunican el significado del contenido: `header`, `nav`, `main`, `section`, `article`, `aside` y `footer`.
- Una clase CSS se escribe con `.`, un ID con `#` y el selector universal con `*`.
- El modelo de caja está formado por contenido, padding, borde y margin.
- `const` se usa cuando no se reasigna; `let`, cuando el valor cambia; `var` se evita en código moderno.
- Las condiciones producen normalmente `true` o `false` y controlan `if`, `switch` y los bucles.
- `for`, `while` y `do...while` repiten instrucciones con reglas diferentes.
- React organiza la interfaz en componentes funcionales reutilizables.
- Los props pasan información del padre al hijo y son de solo lectura.
- `useState` guarda estado y su función actualizadora provoca un nuevo renderizado.
- `useEffect` ejecuta efectos secundarios después del renderizado según sus dependencias.
- JSX permite combinar JavaScript y una estructura similar a HTML en los componentes.
