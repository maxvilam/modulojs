import Leon from "./Leon.js";
import Lobo from "./Lobo.js";
import Oso from "./Oso.js";
import Serpiente from "./Serpiente.js";
import Animal from "./Animal.js";
import Aguila from "./Aguila.js";

const animal = document.getElementById("animal");
const preview = document.getElementById("preview");
const btnRegistrar = document.getElementById("btnRegistrar");
const edad = document.getElementById("edad");
const comentarios = document.getElementById("comentarios");
const obtenerData = (async () => {
  try {
    const URL = "animales.json";
    const request = await fetch(URL);
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
  }
})();
/* const dataAnimal = (async (animal) => {
  const data =await obtenerData;
  const dataA =data.animales;
  for (const iterator of dataA) {
    if (iterator.name==animal) {
      console.log("Iterador " +iterator.imagen);
      return iterator.imagen;
    }    
  };
})(); */

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
    
    const dataAnimal = (async () => {
      const data = await obtenerData;
      const dataA = data.animales;
      for (const iterator of dataA) {
        if (iterator.name == animal.value) {
          console.log(iterator.sonido + "Iterador " + iterator.imagen);
          const ruta = "./assets/imgs/" + iterator.imagen;
          const animalcard1 = new Animal(
            animal.value,
            edad.value,
            ruta,
            comentarios.value,
            iterator.sonido
          );
          animalcard1.listAnimals("cardanimal");
          return;
        }
      }
    })();
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
  },
  false
);
(function limpia() {
  preview.innerHTML = "";
})();

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
