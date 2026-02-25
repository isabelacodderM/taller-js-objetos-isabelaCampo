//1. Declara tres variables:
let nombre = "isabela";
let edad = 18;
let ciudad = "popayan"; 

console.log (`hola, mi nombre es ${nombre}, tengo ${edad} y vivo en la ciudad de ${ciudad}`);

//2. Crea una función que reciba 5 números y realice una operación que usted desee.
function promedio (num1, num2, num3, num4, num5){

let suma = num1 + num2 + num3 + num4 + num5;
let result = suma / 5;
return result;
}
console.log(promedio(4.5, 3.2, 5, 4, 3.8));

//3. Crea una función que reciba nombre y edad y retorne una frase personalizada.
function frase (nombre, edad){
let mensaje = `Esta personita: ${nombre}, ha vivido ${edad} primaveras`
console.log(mensaje);
}
frase (`isa`, 18);

//5. Crea un objeto llamado persona:
let person = {
    nombre: "isabela",
    edad: 18,
    profesion: "estudiante"
};
console.log (person.nombre);
console.log (person.edad);
console.log (person.profesion);

//6. Agrega una propiedad llamada telefono al objeto anterior.
person.telefono = "321-3210";
console.log(person.telefono);

//7. Crea una función que reciba el objeto persona y muestre nombre y profesión usando punto.
function mostrarPerson (persona){
    return `Esta persona: ${persona.nombre}, es ${persona.profesion} del sena.`
}
console.log (mostrarPerson (person));

//8. Crea un objeto estudiante que tenga un objeto notas
let estudiante = {
    nombre: "isabela",
    apellido: "potosi",
    direccion: "calle norte",
    telefono: "123-3210",
    formacion: "tecnologo",
    notas: {
        matematicas: "4.3",
        ingles: "4.6",
    }
}

function mostrarNotas (note){
    return `nota de matematicas: ${note.matematicas}, nota de ingles: ${note.ingles}.`
}
console.log (mostrarNotas (estudiante.notas));


//9. Crea un objeto carro
let carro = {
    marca: "koenigsegg",
    modelo: "koenigsegg jesko",
    propietario: {
        name: "Christian von Koenigsegg",
        age: "52",
    }

}
console.log (carro.propietario.name);

//10 Crea una función que reciba el objeto carro y muestre marca y nombre del propietario usando punto.
function mostrarCarro(carro) {
  console.log("Marca: " + carro.marca);
  console.log("Propietario: " + carro.propietario.name);
}
mostrarCarro(carro);

//11. Cambia la edad del propietario.
carro.propietario.age = "56";
console.log(carro.propietario.age);

//12. Desestructura del objeto persona, ya esta declarao en el punto 9

let { 
    nombre: nombrePersona, 
    edad: edadPersona, 
    profesion: profesionPersona 
} = person;

console.log(nombrePersona);
console.log(edadPersona);
console.log(profesionPersona);

//13. Desestructura del objeto carro

let { marca, modelo } = carro;

console.log(marca);
console.log(modelo);
console.log(name);  
console.log(age);   

//14. Desestructura del objeto propietario
let carro = {
    marca: "koenigsegg",
    modelo: "koenigsegg jesko",
    propietario: {
        name: "Christian von Koenigsegg",
        age: "52",
    }

}
let { propietario: { name, age } } = carro;

console.log(name);
console.log(age);

//15. Crea una función que reciba un objeto desestructurado y muestre nombre y edad.
let persona = {
    nombre: "Isabela",
    edad: 18
};

function mostrarPersona({ nombre, edad }) {
    console.log(nombre);
    console.log(edad);
}

mostrarPersona(persona);

//16. Crea una función que desestructure directamente el propietario en el parámetro.
let carro = {
    marca: "Koenigsegg",
    propietario: {
        nombre: "Christian",
        edad: 52
    }
};
function mostrarPropietario({ propietario: { nombre, edad } }) {
    return `${nombre} tiene ${edad} años`;
}

console.log(mostrarPropietario(carro));

//17. Desestructura e investiga si le puedo dar un nuevo nombre en los objetos destructurados 
let person = {
    nombre: "Isabela",
    edad: 18
};

let { nombre: namePersona, edad: agePersona } = person;

console.log(namePersona);
console.log(agePersona);

//18. Copia con spread
let persona3 = {
    nombre: "Isabela",
    edad: 18,
    profesion: "Estudiante"
};

let copiaPersona3 = { ...persona3, edad: 19 };

console.log(copiaPersona3);

//19. Copia un objeto que tenga otro objeto interno y modifica solo la propiedad interna.
let estudent = {
    nombre: "Isabela",
    direccion: {
        ciudad: "Barbosa",
        pais: "Colombia"
    }
};

let copiaEstudent = {
    ...estudent,
    direccion: {
        ...estudent.direccion,
        ciudad: "Cali"
    }
};

console.log(copiaEstudent);

//20. Crea una función que reciba un objeto 
let libro = {
    titulo: "El Tunel",
    autor: {
        nombre: "Ernesto Sabato",
        edad: 37
    },
    editorial: {
        nombre: "La Primera Edicion",
        pais: "Buenos Aires"
    }
};
function mostrarLibro({
    titulo,
    autor: { nombre },
    editorial: { nombre: nombreEditorial }
}) {
    console.log(`${titulo} fue escrito por ${nombre} y publicado por ${nombreEditorial}.`);
}

mostrarLibro(libro);