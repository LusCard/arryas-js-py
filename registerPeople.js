import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let people = [];

function submitData() {
  rl.question(
    "Ingrese el nombre de la persona (o escriba 'terminar' para finalizar): ",
    (name) => {
      if (name.toLowerCase() === "terminar") {
        showResults();
        rl.close();
        return;
      }

      rl.question("Ingrese la edad de la persona: ", (age) => {
        rl.question("Ingrese la nota de la persona: ", (grade) => {
          people.push([name, parseInt(age), parseFloat(grade)]);

          submitData();
        });
      });
    }
  );
}
function showResults() {
  console.log("\nListado completo de personas:");
  people.forEach((person) => {
    console.log(`Nombre: ${person[0]}, Edad: ${person[1]}, Nota: ${person[2]}`);
  });

  // Ordenar listado por nota de mayor a menor
  let orderedPeople = people.slice().sort((a, b) => b[2] - a[2]);

  console.log("\nListado ordenado por nota (de mayor a menor):");
  orderedPeople.forEach((person) => {
    console.log(`Nombre: ${person[0]}, Edad: ${person[1]}, Nota: ${person[2]}`);
  });
}

// Iniciar el proceso de ingreso de datos
submitData();
