import Animal from "./Animal.js";
export default class Aguila extends Animal {
  constructor(nombre, edad, foto, comentarios, sonido) {
    super(nombre, edad, foto, comentarios, sonido)
  };
  chillar(v1){
      console.log("chillar!!!!" +v1)
  }
}
