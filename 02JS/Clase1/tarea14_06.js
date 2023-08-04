/*Crea una funcion llamada replaceString que reciba un texto como parametro y lo retorne reemplazando todos los espacios de un string por puntos*/ 
let txt="hola mundo soy marin";
const replaceString = (tx,replacement) =>{
    return txt.replaceAll(" ",replacement);
};
console.log(replaceString(txt,"."));

/*Crea una funcion llamada searchContent que que se encargue de buscar contenido especifico, debera retornar true si el texto contiene el contenido a buscar */
const searchContent = (contenido,tosearch) =>{
    return contenido.includes(tosearch);
};
console.log(searchContent("hola soy marin","hola soy"));

/*Escribe una función llamada countCharacters que reciba una cadena como parámetro y devuelva el número total de caracteres (incluyendo espacios) en esa cadena. */
const countCharacters = cadena =>  cadena.length ;
console.log(countCharacters(" hola "));

/*Escribe una función llamada capitalizeEachWord que reciba una cadena como parámetro y devuelva la misma cadena con la primera letra de cada palabra en mayúscula. */
const capitalizeEachWord = cadena => {
    splitString = cadena.split(" ");
    for (let a =0 ; a< splitString.length;a++){
        splitString[a]=splitString[a].charAt(0).toUpperCase() + splitString[a].slice(1);
    }
    return splitString.join(' ');
};
console.log(capitalizeEachWord("hola soy adan marin aloo"));


