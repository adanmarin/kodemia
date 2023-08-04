/*
const form= document.querySelector("form");
console.log(form);
const data = [];
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const email = document.querySelector("#exampleInputEmail1");
    const pass = document.querySelector("#exampleInputPassword1");
    data.push({
        email: email.value,
        password: pass.value
    });
    console.log(data);
});
*/
const form=document.querySelector("form");
const create_card = (nombre,apellido,edad,avatar) =>{
    console.log(nombre,apellido,edad,avatar);
    const card = document.createElement("div");
    card.className="card";
    const img= document.createElement("img");
    img.src=avatar;
    img.alt="Imagen de "+nombre;
    img.className="avatar";
    const data=document.createElement("div");
    data.className="data"
    const data_container_name=document.createElement("div");
    data_container_name.className="data_container";
    const data_name_name=document.createElement("span");
    data_name_name.className="data_name";
    data_name_name.textContent="Nombre: "
    const data_info_name= document.createElement("span");
    data_info_name.className="data_info";
    data_info_name.textContent=nombre;
    data_container_name.appendChild(data_name_name);
    data_container_name.appendChild(data_info_name);
    data.appendChild(data_container_name);


    const data_container_apellido=document.createElement("div");
    data_container_apellido.className="data_container";
    const data_name_apellido=document.createElement("span");
    data_name_apellido.className="data_name";
    data_name_apellido.textContent="Apellido: "
    const data_info_apellido= document.createElement("span");
    data_info_apellido.className="data_info";
    data_info_apellido.textContent=apellido;
    data_container_apellido.appendChild(data_name_apellido);
    data_container_apellido.appendChild(data_info_apellido);
    data.appendChild(data_container_apellido);

    const data_container_edad=document.createElement("div");
    data_container_edad.className="data_container";
    const data_name_edad=document.createElement("span");
    data_name_edad.className="data_name";
    data_name_edad.textContent="Edad: "
    const data_info_edad= document.createElement("span");
    data_info_edad.className="data_info";
    data_info_edad.textContent=edad;
    data_container_edad.appendChild(data_name_edad);
    data_container_edad.appendChild(data_info_edad);
    data.appendChild(data_container_edad);
    
    card.appendChild(img);
    card.appendChild(data);
    const card_container=document.querySelector(".card_container");
    card_container.appendChild(card);
    




}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nombre=document.querySelector("#nombre");
    const apellido=document.querySelector("#apellido");
    const edad=document.querySelector("#edad");
    const avatar=document.querySelector("#avatar");
    create_card(nombre.value,apellido.value,edad.value,avatar.value);
});