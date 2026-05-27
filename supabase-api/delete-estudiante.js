const url =

const headers = {
  apikey: "",
  "Content-Type": ,
};

async function eliminarEstudiante() {

  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });

  console.log("Estudiante eliminado");
}

eliminarEstudiante();