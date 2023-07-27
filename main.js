// 2: crear un constructor de objetos Libro que reciba titulo y autor como parámetros

class Libro {
  
  constructor(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
  }
  
  getInformacionDelLibro() {
    return `${this.titulo}, de ${this.autor.toUpperCase()}`;
  }
  
  
  mostrarDatosEnConsola () {
    console.log(this.getInformacionDelLibro());
  };
  
  mostrarDatosEnAlert () {
    alert(this.getInformacionDelLibro());
  };
  
  getTitulo (){
    return this.titulo;
  };
  
  mostrarDatos(datos){

    if (datos === 'alert'){
      alert(this.getInformacionDelLibro());
    }
    else if ( datos === 'consola') {
      console.log(this.getInformacionDelLibro());
    }
  } 
  
}

let unLibro = new Libro('Ángeles y Demonios', 'Dan Brown');
console.log(unLibro);


// 3: Agregar en Libro el método mostrarDatosEnConsola()
unLibro.mostrarDatosEnConsola();

// 4:Agregar en Libro el método mostrarDatosEnAlert()
unLibro.mostrarDatosEnAlert();

// 5:Agregar en Libro el método getTitulo()
let nuevolibro = new Libro('Fuego y Sangre', 'George R. R. Martin');
let tituloDelNuevoLibro = nuevolibro.getTitulo();

alert(tituloDelNuevoLibro);

// 6:Agregar en Libro el método mostrarDatos()
nuevolibro.mostrarDatos("alert");
nuevolibro.mostrarDatos("consola");
nuevolibro.mostrarDatos('');
