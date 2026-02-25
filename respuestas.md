//1. Variables básicas

1. ¿Qué diferencia hay entre let, var y const?
Estas se hacen para declarar variables
- let: se usa cuando el valor puede cambiar.
- const: se usa para que los valores no cambien.
- var: se puede declarar una variable, pero ahora no es tan recomendable

2. ¿Qué tipo de dato es edad?
edad es un tipo de dato number, numerico.

3. ¿Qué es una variable?
una variable es como una cajita donde se guarda información para usarla después. Por ejemplo:
let nombre = "isa"
nombre: es el nombre de la cajita 
"isa": es lo que guarde dentro de esa cajita.


//2. Función con el nombre que desee

1. ¿Qué es una función?
es un bloque de codigo (que esta dentro de {}) que:
-hace una tarea especifica
-se puede reutilizar
-se ejecuta cuando se llama

2. ¿Qué es un return?
sirve para devolver un resultado fuera de la funcion
por ejemplo: 
function suma(a, b) {
  return a + b;
}
let resultado = suma(5, 3);
console.log(resultado)

La función calcula 5 + 3
return devuelve 8
se guarda en resultado

3. ¿Qué pasa si una función no tiene return?
No devolveria ningun resultado y daria: undifined


//3. Función con parámetros

1. ¿Qué son parámetros?
son las variables que se escriben dentro de los parentesis en una funcion con parametros al definirla.

2. ¿Qué son argumentos?
son los valores que se envian cuando se llama la funcion.

3. ¿Cuál es la diferencia entre ambos?
Parametros: 
- se escriben al crear la funcion
- son variables vacias.
function saludar(nombre, edad) {
  console.log(nombre, edad);
}
  //Argumentos:
saludar("Isabela", 18);
- se envian al llamar la funcion 
- son los valores que le queramos dar a los parametros


//5. Crear objeto
1.	¿Qué es un objeto en JavaScript?
Es una estructura que permite almacenar información en forma de propiedades (clave: valor).

2.	¿Qué es una propiedad?
Es cada dato dentro del objeto.
Ejemplo: nombre: "Isabela"

3.	¿Cómo se accede a una propiedad?
Con el punto: objeto.propiedad.


//6. Agregar propiedad
1.	¿Cómo se agrega una nueva propiedad a un objeto?
Escribiendo:
objeto.nuevaPropiedad = valor;

2.	¿Se puede modificar un objeto declarado con const? Explica.
Sí. No se puede reasignar el objeto completo, pero sí modificar o agregar propiedades.


//7. Función con objeto  (SIN DESESTRUCTURACIÓN)
1.	¿Por qué enviamos el objeto completo?
Porque la función puede necesitar varias propiedades del objeto.

2.	¿Qué ventaja tiene enviar objetos a funciones?
Organiza mejor el código y evita enviar muchos parámetros separados.


//8. Objeto 
1. ¿Cómo se accede a una propiedad dentro de otro objeto?
Con punto doble:
objeto.propiedad.subpropiedad


//10. Función  (SIN DESESTRUCTURACIÓN)
1. ¿Qué ocurre si la propiedad no existe?
Devuelve undefined.

2. ¿Por qué es importante validar datos?
Para evitar errores cuando una propiedad no existe.


//11. Modificar propiedad
1. ¿Cómo se modifica?
objeto.propiedad = nuevoValor

2. Diferencia entre modificar y copiar
Modificar → cambia el objeto original.
Copiar → crea uno nuevo.


//12. Desestructuración 
1. ¿Qué es desestructuración?
Extraer propiedades de un objeto en variables.

2. Ventaja
Código más limpio y menos repetitivo que usar punto.


//13. Desestructuración de objeto carro
1. ¿Qué pasa si el nombre no coincide?
No funciona, da undefined.

2. ¿Es obligatorio usar el mismo nombre?
No. Se puede renombrar:
let { marca: marcaAuto } = carro;


//14. Desestructuración
1. ¿Por qué llaves dentro de llaves?
Porque estamos extrayendo un objeto dentro de otro.

2. ¿Qué significa anidamiento?
Que un objeto contiene otro objeto dentro.


//15. Parámetro desestructurado
1. ¿Qué significa desestructurar en el parámetro?
Significa extraer directamente las propiedades del objeto cuando la función lo recibe.

En vez de usar persona.nombre, ya usamos nombre.

2. ¿Qué ventaja tiene?
Código más limpio
Más claro qué datos usa la función
Evita repetir el punto


//16. Desestructuración en función
1. ¿Por qué no necesitas usar punto dentro del return?
Porque ya extrajiste nombre y edad del objeto.

2. ¿Qué ocurre si el objeto no tiene esa propiedad?
Da error si intentas desestructurar algo que es undefined.

//17. Renombramiento
1. ¿Qué es el renombramiento?
Es asignar un nuevo nombre a una propiedad al desestructurar.

2. ¿Cuándo es útil?
Cuando ya existe una variable con ese nombre
Cuando quieres un nombre más claro
Para evitar conflictos


//18. Copia con spread
1. ¿Qué hace el operador spread (...)?
Copia todas las propiedades de un objeto en otro.

2. ¿La copia es profunda o superficial?
Es superficial (solo copia el primer nivel).


//19. Copiar objeto anidado
1. ¿Por qué copiar también el objeto interno?
Porque si no lo copias, ambos objetos compartirán la misma referencia.

2. ¿Qué pasa si no lo haces?
Si modificas la propiedad interna en la copia, también se modifica el original.


//20. Desestructuración completa 
1. ¿Qué tan recomendable es desestructuración muy larga?
No mucho, puede dificultar la lectura.

2. ¿Cuándo dividirla?
Cuando el objeto es muy grande o tiene muchos niveles.

3. Errores comunes
Nombres mal escritos
Desestructurar propiedades que no existen
Redeclarar variables
No copiar objetos internos correctamente











