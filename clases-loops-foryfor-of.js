var estudiantes = ["Maria", "Sergio", "Roas", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log("Hola, ${estudiante}");
}

for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
