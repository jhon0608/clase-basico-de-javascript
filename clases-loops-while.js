var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log("Hola, ${estudiante}");
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  var estudiande = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
