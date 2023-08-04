 let promedio=98;
 switch (true) {
    case (promedio<=60):
        console.log("F");
        break;
    case (promedio <=70):
        console.log("D");
        break;
    case (promedio <=80):
        console.log("C");
    break;
    case (promedio <=90):
        console.log("B");
    break;
    case (promedio <=100):
        console.log("A");
    break;
    default:
        console.log("ENTRO AQUI");
        break;
 }

 /*Crear una funcion que reciba un nombre y un apellido y devuelva un saludo y si no recibe un nombre simplemente llamarlo amigo 

input: freddy, kruguer
output: Hola Freddy kruguer
output: Hola amigo


Crear una funcion que altere el valor de +1 de una variable global cada que se ejecute (no retornar nada)


Crear un funcion que reciba un parametro de tipo numero y regrese true si el parametro es un numero par o false si es un numero impar*/


const saludo = (nombre) => nombre == undefined ? "Hola amigo":"Hola " + nombre;
console.log(saludo());
console.log(saludo("Marin"));

contador=0;
const aumentar=() => contador++;
aumentar();
aumentar();
console.log(contador);

const par = (num) => num %2 == 0 ? true:false;
console.log(par(11));