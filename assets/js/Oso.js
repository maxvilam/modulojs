import Animal from "./Animal.js";
export default class Oso extends Animal {
  constructor(nombre, edad, foto, comentarios, sonido) {
    super(nombre, edad, foto, comentarios, sonido)
  }
  chillar(){
      console.log("chillar")
  }
}
