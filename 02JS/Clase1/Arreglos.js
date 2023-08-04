var animales = [
    {
      nombre: "León",
      especie: "Felino",
      habitat: "Sabana",
      carnivoro: true
    },
    {
      nombre: "Elefante",
      especie: "Mamífero",
      habitat: "Selva",
      carnivoro: false
    },
    {
      nombre: "Tigre",
      especie: "Felino",
      habitat: "Selva",
      carnivoro: true
    },
    {
      nombre: "Cebra",
      especie: "Mamífero",
      habitat: "Sabana",
      carnivoro: false
    },
    {
      nombre: "Gorila",
      especie: "Primate",
      habitat: "Selva",
      carnivoro: false
    },
    {
      nombre: "Jirafa",
      especie: "Mamífero",
      habitat: "Sabana",
      carnivoro: false
    },
    {
      nombre: "Leopardo",
      especie: "Felino",
      habitat: "Selva",
      carnivoro: true
    },
    {
      nombre: "Hipopótamo",
      especie: "Mamífero",
      habitat: "Agua dulce",
      carnivoro: false
    },
    {
      nombre: "Lobo",
      especie: "Cánido",
      habitat: "Bosque",
      carnivoro: true
    },
    {
      nombre: "Tortuga",
      especie: "Reptil",
      habitat: "Tierra y agua",
      carnivoro: false
    }
  ];

  /*
  {
      nombre: "Tortuga",
      especie: "Reptil",
      habitat: "Tierra y agua",
      carnivoro: false
    }
  */
const findAnimal = (name) =>  animales.find((item,index,arr) => item.nombre === name);
const findAnimalFilter = (carnivoro) => animales.filter((item)=> item.carnivoro===carnivoro);
console.log(findAnimalFilter(true));


console.log(findAnimalIndex("Tortuga"));
  
  animales.forEach((item, index,array) => 
  {
    console.log(item.nombre);
    console.log(index);
    //console.log(array);
    console.log("**********************");

  });

  const arr = [1,2,3,4,5];
  arr2= arr.map((item)=> item*2);
  console.log(arr2);




