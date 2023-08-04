const songsData = [
    {
        name: "¿Dónde jugarán los niños?",
        band: "Maná",
        releaseYear: "1992",
        statistics: {
            likes: 20000,
            reproductions: 8000
        },
    },
    {
        name: "La muralla verde",
        band: "Enanitos Verdes",
        releaseYear: "1986",
        statistics: {
            likes: 21000,
            reproductions: 19000
        },
    },
    {
        name: "Te Ví En Un Tren",
        band: "Enanitos Verdes",
        releaseYear: "1987",
        statistics: {
            likes: 20000,
            reproductions: 23490
        },
    },
    {
        name: "Mariposa Traicionera",
        band: "Maná",
        releaseYear: "2002",
        statistics: {
            likes: 12000,
            reproductions: 25690
        },
    },
    {
        name: "Rayando el Sol",
        band: "Maná",
        releaseYear: "1990",
        statistics: {
            likes: 12000,
            reproductions: 18000
        },
    },
    {
        name: "La celula que explota",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12000,
            reproductions: 23421
        },
    },
    {
        name: "No dejes que...",
        band: "Jaguares",
        releaseYear: "1999",
        statistics: {
            likes: 12345,
            reproductions: 10000
        },
        album:'asdas',
        image: 'wwww..asd'
    }
]

/*
    name: "¿Dónde jugarán los niños?",
    band: "Maná",
    releaseYear: "1992",
    statistics: {
        likes: 20000,
        reproductions: 8000
        },
*/ 

const getSongWithMostReprod = () => {
    let canciones=[];
    songsData.forEach((item,index)=>{
        canciones.push({pos:index,reproduciones:item.statistics.reproductions});
    });
    canciones.sort((a,b)=> a.reproduciones - b.reproduciones);
    return songsData[canciones[canciones.length-1].pos];

};
const getOlderSong= () => {
    let canciones=[];
    songsData.forEach((item,index)=>{
        canciones.push({pos:index,year:item.releaseYear});
    });
    canciones.sort((a,b)=> a.year - b.year);
    return songsData[canciones[0].pos];

};
console.log("Canción con más reproduciones");
console.log(getSongWithMostReprod());
console.log("Canción más oldie");
console.log(getOlderSong());


const numberList = [1,4,6,7,8];

const resultReduce = numberList.reduce((accum,item)=>{
    return accum+item;

},0);

console.log(resultReduce);