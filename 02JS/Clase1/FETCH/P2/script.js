const persona = {
    name: 'Adan',
    age: '31'
}


const createData = async () => {
    const response = await fetch ('https://kodemiamarin-default-rtdb.firebaseio.com/.json',{
        method:'POST',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(persona)
    });
}

 //createData();

 const getAllData = async () =>{
    const response = await fetch ('https://kodemiamarin-default-rtdb.firebaseio.com/.json',{
        method: 'GET'
    });
    data= await response.json();
    const arreglo = Object.entries(data);
    const parseData = arreglo.map((item,index)=>{
        newArreglo= {
            id: item[0],
            age: item[1].age,
            name: item[1].name
        }
        return newArreglo;
    });
    
    return arreglo;
    
 }

const getDataById = async (id) =>{
    const response= await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/-NaK1hOnePfP7YtOa2UT.json',{
        method:'GET'
    });
    data = await response.json();
    console.log(data);
}


const deleteById = async (id) =>{
    const response= await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/-NaK1hOnePfP7YtOa2UT.json',{
        method:'DELETE'
    });
}


const updateById = async (id) =>{
    const response= await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/-NaK1lB0E378sYMZ1K0v.json',{
        method:'PUT',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify( {
            name: "Marin Nuevo",
            age: "30"
        })
    });
} 

updateById();