const url =

const headers = {
  apikey: "",
  "Content-Type": "",
};

async function actualizarEstudiante() {

  const response = await fetch(url, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      nombre: "Carlos",
    }),
  });

  const data = await response.json();

  console.log(data);
}

actualizarEstudiante();