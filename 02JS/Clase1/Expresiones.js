//-Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula
const busquedaPatron = (cadena,patron) => patron.test(cadena);
console.log(busquedaPatron('holA',/[A-Z]/));
//-Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo. 
let  numerosAleatorios = [8, 15, 42, 16, 23, 4, 9, 11, 27, 5, 18, 33, 20, 7, 13];
const masGrande = (arreglo) =>{
    arreglo.sort(function(a,b){
        return b - a;
    });
    return arreglo[0];
}
console.log(numerosAleatorios);
console.log(masGrande(numerosAleatorios));
//-Crear una función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros.
let  numerosAleatorios2 = [8, 15, 42, 16, 23, 4, 9, 11, 27, 5, 18, 33, 20, 7, 13];
const cuantosMayor = (arreglo,numero) => {
    let cont=0;
    for(const x of arreglo){
        if(x>numero)cont++
    }
    return cont;
}
console.log(numerosAleatorios2);
console.log(cuantosMayor(numerosAleatorios2,5));
//-Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo
let  numerosAleatorios3 = [8, 15, 42, 16, 23, 4, 9, 11, 27, 5, 18, 33, 20, 7, 13];
const numPares = arreglo =>{
    arregloPares=[];
    for(const x of arreglo){
        if(x%2==0)arregloPares.push(x);
    }
    return arregloPares
}
console.log(numPares(numerosAleatorios3));
//-Crear una función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros
let  numerosAleatorios4 = [8, 15, 42, 16, 23, "a" ,4, 9, 11, 27, 5, 18, 33, 20, 7, 13,20, "a"];
const repetidos = (arreglo,elemento) => {
    let cont=0;
    for(const x of arreglo){
        if (x==elemento)cont++;
    }
    return cont;
}
console.log(repetidos(numerosAleatorios4,"a"));
//-Crear una función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra
var animalillos = ["Delfín", "Ballena", "Tiburón", "Pulpo", "Pez payaso", "Manta raya"];
const encontrarString = (arreglo,encontrarString) => {
    let restultado=false;
    for(const x of arreglo){
        if (x.toUpperCase()==encontrarString.toUpperCase())
        {
            restultado = true;
            break;
        }
    }
    return restultado;
}
console.log(encontrarString(animalillos,"pulpo"));