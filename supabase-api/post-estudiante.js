const SUPABASE_URL =
const SUPABASE_ANON_KEY = "REDACTED";

async function crearEstudiante() {
  const estudiante = {
    id: 1,
    nombre: "María López",
    edad: 21,
    email: "maria.lopez@mail.com",
    curso_id: 1,
  };

  const response = await fetch(SUPABASE_URL, {
    method: "POST",
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(estudiante),
  });

  const data = await response.json();

  console.table(data);
}

crearEstudiante();