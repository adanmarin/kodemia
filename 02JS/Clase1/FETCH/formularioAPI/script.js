var save=""; // Si esta vacia es guardar, sino tendrá el ID al que se debe actualizar
var eliminarFlag="";
window.onload = function() {
    getAllData();
    save=""
  };


const guardar = document.getElementById("save");
const getDataById = async (id) =>{
    const response = await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/'+id+'.json',{
       method:'GET' 
    });
    data = await response.json();
    return data;
};
const getAllData = async () =>{
    const response = await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/.json',{
        method: 'GET'
    });
   
    data= await response.json();
    if(data!=null){
        const arreglo = Object.entries(data);
        
        arreglo.forEach((item)=>{
            buildCard(item[0],item[1].url_img,item[1].name,item[1].lastName,item[1].age);
        });
    }
}
const limpiarForm = () =>{
    document.getElementById("name").value="";
    document.getElementById("lastName").value="";
    document.getElementById("age").value="";
    document.getElementById("url_img").value="";
}
const createData = async (persona) => {
    const response = await fetch ('https://kodemiamarin-default-rtdb.firebaseio.com/.json',{
        method:'POST',
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        },
        body:JSON.stringify(persona)
    });
    if(response.status==200){
        data= await response.json();
        buildCard(data.name,persona.url_img,persona.name,persona.lastName,persona.age);
        
    }
}

guardar.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validar()){
        const persona={
            name: document.getElementById("name").value,
            lastName: document.getElementById("lastName").value,
            age: document.getElementById("age").value,
            url_img: document.getElementById("url_img").value
        };
        if(save=="")
        {
            createData(persona);
        }
        else{
            const response=fetch('https://kodemiamarin-default-rtdb.firebaseio.com/'+save+".json",{
                method:'PUT',
                headers: {
                    "Content-type":"application/json;charset=UTF-8"
                },
                body: JSON.stringify(persona)
            })
            document.getElementById("img_"+save).src=persona.url_img;
            document.getElementById("name_"+save).textContent=persona.name;
            document.getElementById("lastName_"+save).textContent=persona.lastName;
            document.getElementById("age_"+save).textContent=persona.age;
           
            
            save="";
        }
        limpiarForm();
    }
});

const mostrarError = (msg) =>{
    const error=document.getElementById("errorMsg");
    error.textContent=msg;
    error.className="errorMsgShow";
}
const limpiarError = () =>{
    const error=document.getElementById("errorMsg");
    error.textContent="";
    error.className="errorMsgHide";
}
const validarURL = (url) =>{
    const regexp = /^https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z]+[\/:]?[a-zA-Z0-9-._~%!$&'()*+,;=]/g;
    return regexp.test(url);
}

const validar = () =>{
    let paso=false;
    const name= document.getElementById("name");
    const lastName= document.getElementById("lastName");
    const age=document.getElementById("age");
    const url_img=document.getElementById("url_img");

    if(name.value=="" || lastName.value=="" || age.value=="" || url_img.value==""){
        mostrarError("Ups!... Todos los campos son obligatorios");
        return paso;
    }
    if(name.value.length>30 || lastName.value.length>30){
        mostrarError("Ups!... Nombre o Apellido no pueden ser tan largos (30 carac Max)");
        return paso;
    }
    if(!Number.isInteger(age.value) && (age.value>=120 || age.value<=0 )){
        mostrarError("Ups!... Edad es un dato númerico, y no creo que tengas más de 120 años o menos de cero años");
        return paso;
    }
    if(!validarURL(url_img.value)){
        mostrarError("Ups!... Esa URL no me lleva a ningún lado");
        return paso;
    }
    limpiarError();
    paso=true;
    return paso;
    
}

const buildCard = (id,url_img,name,lastName,age) =>{
    const cards__item = document.createElement("div");
    cards__item.className="cards__item";
    cards__item.id="card__item_"+id;
    const card__item_photo= document.createElement("div");
    card__item_photo.className="card__item_photo"
    const  card_img=document.createElement("img");
    card_img.src=url_img;
    card_img.id="img_"+id;
    card__item_photo.appendChild(card_img);
    cards__item.appendChild(card__item_photo);
    const cards__item_data = document.createElement("div");
    cards__item_data.className="cards__item_data";
    const cards__item_data_actions= document.createElement("div");
    cards__item_data_actions.className="cards__item_data_actions";

    const a_edit = document.createElement("a");
    a_edit.className="img_icon_link_edit";
    a_edit.href="#";
    const a_edit_icon=document.createElement("img");
    a_edit_icon.src="./img/edit.svg";
    a_edit_icon.alt="Editar a "+name;
    a_edit_icon.className="img_icon";
    a_edit_icon.addEventListener("click",()=>editar(id))
    a_edit.appendChild(a_edit_icon);
    cards__item_data_actions.appendChild(a_edit);
    cards__item.appendChild(cards__item_data_actions);

    const a_delete = document.createElement("a");
    a_delete.className="img_icon_link_delete";
    a_delete.href="#";
    const a_delete_icon=document.createElement("img");
    a_delete_icon.src="./img/delete.svg";
    a_delete_icon.alt="Eliminar a "+name;
    a_delete_icon.className="img_icon";
    a_delete_icon.addEventListener("click",()=>{
        eliminar(id);
    });
    a_delete.appendChild(a_delete_icon);
    cards__item_data_actions.appendChild(a_delete);
    cards__item_data.appendChild(cards__item_data_actions);
    

   const cards__item_data_name=document.createElement("div");
   cards__item_data_name.className="cards__item_data_name";
   const cards__item_data_name_span=document.createElement("span");
   cards__item_data_name_span.textContent=name;
   cards__item_data_name_span.id="name_"+id;
   cards__item_data_name.appendChild(cards__item_data_name_span);
   cards__item_data.appendChild(cards__item_data_name);

   const cards__item_data_lastname=document.createElement("div");
   cards__item_data_lastname.className="cards__item_data_lastname";
   const cards__item_data_lastname_span=document.createElement("span");
   cards__item_data_lastname_span.textContent=lastName;
   cards__item_data_lastname_span.id="lastName_"+id;
   cards__item_data_lastname.appendChild(cards__item_data_lastname_span);
   cards__item_data.appendChild(cards__item_data_lastname);

   const cards__item_data_age= document.createElement("div");
   cards__item_data_age.className="cards__item_data_age";
   const cards__item_data_age_span = document.createElement("span");
   cards__item_data_age_span.textContent=age;
   cards__item_data_age_span.id="age_"+id;
   cards__item_data_age.appendChild(cards__item_data_age_span);
   cards__item_data.appendChild(cards__item_data_age);
   cards__item.appendChild(cards__item_data);
   const cards=document.getElementById("cards");
   cards.appendChild(cards__item);
}
const editar = async(id) => {
    limpiarError();
    const data = await getDataById(id);
    save=id;
    const  name=document.getElementById("name");
    name.value=data.name;
    const lastName=document.getElementById("lastName");
    lastName.value=data.lastName;
    const age=document.getElementById("age");
    age.value=data.age;
    const url_img=document.getElementById("url_img");
    url_img.value=data.url_img;
   

}
const mostrarEsconderModal= (a) =>{
    const modal = document.getElementById("modal");
    if(a){
        modal.style.display="flex";
    }
    else{
        modal.style.display="none";
    }
}

const deleteById= async (id) =>{
    const response=await fetch('https://kodemiamarin-default-rtdb.firebaseio.com/'+id+".json",{
        method:'DELETE'
    });
}
const boton_aceptar = document.getElementById("boton_aceptar");
boton_aceptar.addEventListener("click",()=>{

    document.getElementById("cards").removeChild(document.getElementById("card__item_"+eliminarFlag));
    deleteById(eliminarFlag);
    mostrarEsconderModal(false);
    limpiarError();
    limpiarForm();
    eliminarFlag="";
    save="";
});

const boton_cancelar = document.getElementById("boton_cancelar");
boton_cancelar.addEventListener("click", ()=>{
    mostrarEsconderModal(false);
    eliminarFlag="";
});
const eliminar = (id) =>{
    eliminarFlag=id;
    mostrarEsconderModal(true);
}