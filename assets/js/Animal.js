export default class Animal {
  constructor(nombre, edad, foto, comentarios, sonido) {
    this._nombre = () => nombre;
    this._edad = () => edad;
    this._foto = () => foto;
    this._comentarios = () => comentarios;
    this._sonido = () => sonido;
  }
  get nombre() {
    return this._nombre();
  }
  get edad() {
    return this._edad();
  }
  get foto() {
    return this._foto();
  }
  set comentarios(comentarios) {
    this._comentarios = () => comentarios;
  }
  get sonido() {
    return this._sonido();
  }
  reproducir() {
    var music = new Audio(this.sonido);
    music.play();
  }
  listAnimals(id, baudio) {
    const data = document.getElementById(id);
    data.innerHTML +=
      `
    <div class="col-4">
    <div class="card">
    <img src="${this.foto}" class="card-img-top" alt="${this.nombre}">` +
      baudio +
      `
    </div>
    </div>`;
  }
}
