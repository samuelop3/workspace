let usuario = "admin";
let contrasena = "12345678";

if (usuario === "") {
  console.log("Error: usuario vacío");
} else if (contrasena.length < 8) {
  console.log("Error: contraseña muy corta");
} else {
  console.log("Login exitoso");
}