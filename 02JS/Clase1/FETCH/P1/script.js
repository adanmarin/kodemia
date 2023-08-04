const response = fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
    method: 'GET'
});

/*
response.then((data) => {
    console.log(data);
    const dataParse = JSON.parse(data);
}).catch((error)=>{
    console.log(error);
});
*/

//response.then((data) => data.json()).then((jeson)=> console.log(jeson));

const getInfo = async () => {
    let data='';
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
            method: 'GET'
        });
        if(response.status===200){
            data = await response.json();
            data = createEmail(data);
        }
        else{
            alert("No se puede mijo");
        }
    }catch(e){
        console.log(e);
    }
    
    return data;
};

console.log(getInfo());

const createEmail = (arreglo) => {
    
    const newList = arreglo.map((item)=>{
        return item.email;
    });
    return newList;
};
