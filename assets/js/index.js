import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Animal from "./Animal.js";
import Aguila from "./Aguila.js";
const dataAnimal = "";

const animal = document.getElementById("animal");
const preview = document.getElementById("preview");
const btnRegistrar = document.getElementById("btnRegistrar");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const cardanimal = document.getElementById("cardanimal");

const aguila1 = new Aguila(
  "Cuello Blanco",
  10,
  "Aguila.png",
  "nada especial",
  "Chillido.mp3"
);

btnRegistrar.addEventListener(
  "click",
  function () {
    if (animal.value == "Seleccione un animal") {
      alert("Ingrese el nombre del animal");
      return;
    } else {
      if (edad.value == "Seleccione un rango de años") {
        alert("Ingrese la edad del animal");
        return;
      } else {
        if (comentarios.value == "") {
          alert("Ingrese comentarios");
          return;
        }
      }
    }
    let ruta = "";
    switch (animal.value) {
      case "Leon":
        ruta = "Leon.png";
        break;
      case "Lobo":
        ruta = "Lobo.jpg";
        break;
      case "Oso":
        ruta = "Oso.jpg";
        break;
      case "Serpiente":
        ruta = "Serpiente.jpg";
        break;
      default:
        ruta = "Aguila.png";
        break;
    }
    ruta = "./assets/imgs/" + ruta;
    const animalcard1 = new Animal(
      animal.value,
      edad.value,
      ruta,
      comentarios.value,
      "Aullido"
    );
    animalcard1.listAnimals("cardanimal");
  },
  false
);
(function limpia() {preview.innerHTML =""})();


animal.addEventListener("change", function () {
  const imganimal = animal.value;
  let ruta = "";
  switch (imganimal) {
    case "Leon":
      ruta = "Leon.png";
      break;
    case "Lobo":
      ruta = "Lobo.jpg";
      break;
    case "Oso":
      ruta = "Oso.jpg";
      break;
    case "Serpiente":
      ruta = "Serpiente.jpg";
      break;
    default:
      ruta = "Aguila.png";
      break;
  }
  preview.innerHTML = `<img width="230px" class="imageanimal" src="./assets/imgs/${ruta}" alt="Imagen animal">`;
});