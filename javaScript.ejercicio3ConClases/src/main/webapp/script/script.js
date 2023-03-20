// Array para los objetos Alumno.
let listaAlumnos = [];

// Definición de la clase Alumno con sus atributos y su constructor que los recibe por parametro.
class Alumno {
	constructor(idAlumno, nombre, apellidos, teléfono, marca, modelo, idPortatil) {
		this.idAlumno = idAlumno;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = teléfono;
		this.marca = marca;
		this.modelo = modelo;
		this.idPortatil = idPortatil;
	}
}
// Función para mostrar el menú y solicitar una opción al usuario.
function mostrarMenu() {
	console.log("\n--- MENÚ ---");
	console.log("1. Matrícula de alumno");
	console.log("2. Borrar alumno");
	console.log("3. Listar alumnos");
	console.log("4. Salir");

	return parseInt(prompt("Elige una opción:"));;
}

// Función para pedir los datos al usuario y matricular un objeto Alumno con dichos datos.
function matricularAlumno() {
	let idAlumno = generarId();
	let nombre = prompt("Introduce el nombre del alumno:");
	let apellidos = prompt("Introduce los apellidos del alumno:");
	let telefono = prompt("Introduce el teléfono del alumno:");
	let marcaPortatil = prompt("Introduce la marca del portátil:");
	let modeloPortatil = prompt("Introduce el modelo del portátil:");

	let idPortatil;
	if (marcaPortatil.length > 3)
		idPortatil = marcaPortatil.substring(0, 3);
	else
		idPortatil = marcaPortatil;
	if (modeloPortatil.length > 3)
		idPortatil += "-" + modeloPortatil.substring(0, 3);
	else
		idPortatil += "-" + modeloPortatil;


	// Guardamos los datos del alumno y del portátil en el array al realizar la instancia.
	listaAlumnos.push(new Alumno(idAlumno, nombre, apellidos, telefono, marcaPortatil, modeloPortatil, idPortatil));
	console.log("Alumno matriculado correctamente.");
}

// Función para borrar un alumno.
function borrarAlumno() {
	
	let idBorrarAlumno = prompt("Introduce el identificador del alumno a borrar:");
	let posicion;

	for (let i = 0; i < listaAlumnos.length; i++)
		if (listaAlumnos[i].idAlumno == idBorrarAlumno) {
			posicion = i;
			listaAlumnos.splice(posicion, 1); // Elimina un elemento del array en la posición indicada
			console.log("Alumno borrado correctamente.");
			break;
		} else
			console.log("El identificador de alumno introducido no existe.");
}


// Función para listar los alumnos con su portátil asignado.
function listarAlumnos() {
	
	console.log("\n--- LISTA DE ALUMNOS ---");

	if (listaAlumnos.length == 0)
		console.log("No hay alumnos dados de alta que mostrar");
		
	for (let i = 0; i < listaAlumnos.length; i++) {
		
		let alumno = listaAlumnos[i];

		console.log("Identificador de alumno:", alumno.idAlumno);
		console.log("Nombre completo:", alumno.nombre, alumno.apellidos);
		console.log("Teléfono:", alumno.telefono);
		console.log("Identificador de portátil:", alumno.idPortatil);
		console.log("-------------------------");
	}
}

// Funcion qu nos genera un ID único para el objeto Alumno
function generarId() {

	let idMayor = 0;

	if (listaAlumnos.length == 0)
		return 1;

	for (let i = 0; i < listaAlumnos.length; i++) {
		if (listaAlumnos[i].idAlumno > idMayor)
			idMayor = listaAlumnos[i].idAlumno;
	}
	return idMayor + 1;
}

// Procedimiento que sigue la aplicación
let opcion
do {
	opcion = mostrarMenu();

	switch (opcion) {
		case 1:
			matricularAlumno();
			break;
		case 2:
			borrarAlumno()
			break;
		case 3:
			listarAlumnos();
			break;
		case 4:
			alert("Saliendo de la aplicación");
			break;
	}

} while (opcion !== 4);