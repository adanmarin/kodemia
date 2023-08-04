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