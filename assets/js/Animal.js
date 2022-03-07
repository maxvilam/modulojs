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
  listAnimals(id) {
    const data = document.getElementById(id);
    data.innerHTML += `
    <div class="col">
            <div class="card">
              <img src="${this.foto}" class="card-img-top" alt="Foto Animal">
              <div class="card-body bg-secondary">
              <img width="50px" src="assets/imgs/audio.svg" alt="">
              </div>
            </div>
    </div>`;
  }
}
