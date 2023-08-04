const persona = {
    name: 'marin',
    age: 31,
    address : {
        calle:'Oscar Aguilar',
        colonia: "Fco I madero"
    }
}

for(const key in persona)
{
    console.log(persona[key]);
}


for(const key in persona.address)
{
    console.log(persona.address[key]);
}

////////////////////////CALLBACKS


const function1 =() => {
    console.log("function1");
};
const function2 =() => {
    console.log("function2");
};
const function3 =() => {
    console.log("function3");
};

const myFunction = (func1,func2,func3) =>
{
    func1();
    func2();
    func3();
    console.log("myFunction");
}

myFunction(function1,function2,function3);


//Crear una función que se encargué de saludar. debe recibir el tipo de saludo y 2 funciones como parametro
//Si el saludo es de tipo formal se debera ejecutar una funcion con el saludo formal
//Si el saludo es de tipo casual, se deberá ejecutar una función con el saludo casual

const formal = () => "Hola, muy buen día ";
const informal = () => "Qué onda ";
const saludo = (formal,informal,nombre,tiposaludo) =>tiposaludo==0 ? formal() + nombre: informal() + nombre;
const saludo2 = (formal,informal,nombre,tiposaludo) =>tiposaludo==0 ? `${formal()}${nombre}`:`${informal()}${nombre}`;
console.log(saludo(formal,informal,"Marin",0));
console.log(saludo(formal,informal,"Adan",1));


const test = () => {
    console.log("TESTINGGG");
};
setTimeout(test,2000);



//- Crear una funcion que te salude cada 2 segundos
setInterval(()=> console.log("Hola plebe"),2000);
//Crea una funcion que te salude y haz que se ejecute despues de 10 segundos de espera
const hello = (name) => console.log("Ey " + name);
hello("pablo");
setTimeout(()=>hello("marin"),10000);


//Crear una funcion que se encargue de saludar a cada persona de un arreglo, debera recibir el arreglo y un callback que se encargara de crear el saludo
nombres = ["Marin","Irving","Andres","Alexis"];
const armarSaludo = (nombre) => "Hola " + nombre;
const salu2 = (nombres,func) =>{
    for(const nombre of nombres){
        console.log(func(nombre));
    }
}
salu2(nombres,armarSaludo);
//Crear una funcion  que se encargue de recibir un arreglo de numeros y un callback, el callback se encargara de sumarle +1 a cada numero
numbers= [10,5,7,8,1];
const masUno = (numero) => numero+1;
const sumarle = (numeros,func) =>{
    for(const numero of numeros){
        console.log(numero+" + 1 ="+func(numero));
    }
}
sumarle(numbers,masUno);


//Crear una funcion que se encargue de saludar a cada persona de un arreglo REGRESANDO UN ARREGLO, debera recibir el arreglo y un callback que se encargara de crear el saludo
nombres = ["Marin","Irving","Andres","Alexis"];
const armarSaludo2= (nombre) => "Hola " + nombre;
const salu3 = (nombres,func) =>{
    let cadena=[];
    for(const nombre of nombres){
        cadena.push(func(nombre));
    }
    return cadena;
}
console.log(salu3(nombres,armarSaludo2));

