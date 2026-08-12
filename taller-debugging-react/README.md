# Taller de Debugging en React

Un proyecto educativo para aprender a depurar aplicaciones React usando las DevTools del navegador, `console.*` y breakpoints.

## Objetivos de aprendizaje

1. Abrir y navegar las DevTools del navegador
2. Leer mensajes de error de React/JavaScript
3. Usar `console.log`, `console.warn`, `console.error`, `console.table` y `console.group`
4. Identificar y corregir 5 errores comunes en React:
   - Props/valores `undefined`
   - Comparaciones de tipos incorrectas
   - Mutación de estado
   - Efectos sin dependencias
   - Errores async no controlados
5. Usar breakpoints en la pestaña Sources

## Los 5 bugs a encontrar

- **Bug 1**: La app no carga (undefined en propiedad faltante)
- **Bug 2**: useEffect infinito (sin array de dependencias)
- **Bug 3**: Filtros no funcionan (comparación de tipos incorrecta)
- **Bug 4**: Agregar tarea no actualiza la lista (mutación de estado)
- **Bug 5**: "Cargando perfil..." se queda pegado (error async sin catch)

## Instalación y uso

```bash
npm install
npm run dev
```

Luego abre el navegador en `http://localhost:5173` y abre las DevTools con `F12`.

## Entregas esperadas

Por cada bug, documenta:
1. El mensaje de error o comportamiento observado
2. El `console.log` usado para confirmar la causa
3. La línea de código corregida
4. Explicación en tus palabras de por qué pasaba el bug
