const url =

const headers = {
  apikey: "",
  "Content-Type": "application/json",
};

async function obtenerEstudiantes() {

  try {

    console.log("Consultando estudiantes...");

    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const data = await response.json();

    console.table(data);

  } catch (error) {

    console.log("Error:");
    console.log(error);

  }
}

obtenerEstudiantes();