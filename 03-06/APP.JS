async function obtenerPersonaje(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const personaje = await response.json();
    console.log(personaje);
    return personaje;
  } catch (error) {
    console.error(`Error al obtener el personaje con id ${id}:`, error);
  }
}

async function obtenerPersonajes() {
  const url = 'https://rickandmortyapi.com/api/character';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const personajes = await response.json();
    console.log(personajes);
    return personajes;
  } catch (error) {
    console.error('Error al obtener los personajes:', error);
  }
}

async function soloNombres() {
  try {
    const datos = await obtenerPersonajes();
    if (!datos || !Array.isArray(datos.results)) {
      console.warn('No se encontró la lista de personajes.');
      return;
    }

    const nombres = datos.results.map(personaje => personaje.name);
    console.log('Nombres de personajes:', nombres);
    return nombres;
  } catch (error) {
    console.error('Error al obtener solo nombres:', error);
  }
}

async function obtenerPagina(numeroPagina) {
  const url = `https://rickandmortyapi.com/api/character?page=${numeroPagina}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const datos = await response.json();
    console.log(`Página ${numeroPagina}:`, datos);
    return datos;
  } catch (error) {
    console.error(`Error al obtener la página ${numeroPagina}:`, error);
  }
}

obtenerPersonaje(1);
obtenerPersonajes();
soloNombres();
obtenerPagina(2);
