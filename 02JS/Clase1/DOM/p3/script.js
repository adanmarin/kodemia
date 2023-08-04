const koders = [
    {
      name: 'Arnold',
      img: 'https://picsum.photos/130/130',
      generation: 11,
      age: 19,
      signatures: [
          {
              module: 'JS',
              average: 9
          },
          {
              module: 'HTML',
              average: 9
          },
          {
              module: 'React',
              average: 10
          }
      ]
    },
    {
      name: 'Gelga',
      img: 'https://picsum.photos/130/130',
      generation: 12,
      age: 20,
      signatures: [
          {
              module: 'JS',
              average: 4
          },
          {
              module: 'HTML',
              average: 6
          },
          {
              module: 'React',
              average: 6
          }
      ]
    },
    {
      name: 'Gerald',
      img: 'https://picsum.photos/130/130',
      generation: 12,
      age: 20,
      signatures: [
          {
              module: 'JS',
              average: 7
          },
          {
              module: 'HTML',
              average: 7
          },
          {
              module: 'React',
              average: 7
          }
      ]
    },
  ];

const create_div = (img,name,age,subjet,avg) =>{
    avg=avg.toFixed(1);
    const container= document.createElement('div');
    container.className="container";
    const t_img=document.createElement("img");
    t_img.src=img;
    t_img.className="container_img";
    container.appendChild(t_img);
    const t_data = document.createElement('div');
    t_data.className="data";
    const t_h2= document.createElement('h2');
    t_h2.className="name";
    t_h2.textContent=name;
    const t_span_age = document.createElement('span');
    t_span_age.className="age";
    t_span_age.textContent=age+" años";
    const t_div_subjets = document.createElement('div');
    t_div_subjets.className="subjets";
    subjet.forEach((item)=>{
        const sub= document.createElement('span');
        sub.className="subjets_name";
        sub.textContent=item;
        t_div_subjets.appendChild(sub);
    });
    const t_div_avg = document.createElement('div');
    t_div_avg.className="avg";
    const t_span_avg = document.createElement('span');
    t_span_avg.className="avg-digit";
    t_span_avg.textContent="Promedio "+avg;
    const t_span_msg= document.createElement('span');
    t_span_msg.className=avg>6 ? "avg-msg-pass":"avg-msg-fail";
    t_span_msg.textContent= avg > 6? "Aprobado":"Reprobado";
    container.appendChild(t_data);
    t_div_avg.appendChild(t_span_avg);
    t_div_avg.appendChild(t_span_msg);
    t_data.appendChild(t_h2);
    t_data.appendChild(t_span_age);
    t_data.appendChild(t_div_subjets);
    t_data.appendChild(t_div_avg);
    document.body.appendChild(container);


};
koders.forEach((person)=>{
    subjet=[];
    avg=0;
    person.signatures.forEach((item)=>{
        subjet.push(item.module);
        avg=avg+item.average;
    });
    avg=avg/person.signatures.length;
    create_div(person.img,person.name,person.age,subjet,avg);
});
const button = document.querySelector("#send");
button.addEventListener("click",()=>{
    alert("HOLA");
});

  /*
export default nombreVariableOfuncion;
import fileJS from 'PWD'
export {nombrefunciones, nombrevariables}
import {nombrefunciones, nombrevariables}  from 'pwd'
}


const h1=    document.createElement('h1');
const div= document.createElement('div');
h1.textContent="Hola Mundo"
div.appendChild(h1);
document.body.appendChild(div);
console.log(div);

const container = document.querySelector('#container');
const firstElement= document.createElement('li');
const secondElement= document.createElement('li');
firstElement.textContent="FIRST";
secondElement.textContent="SECOND"
container.appendChild(firstElement);
container.appendChild(secondElement);

const createElement = (tag,txt) =>{
    element=document.createElement(tag);
    element.textContent=txt;
    return element;
};

const container = document.querySelector('#container');
const list = ["Marin","Pedro","Joana","Irving"];
list.forEach((item)=>{
    container.appendChild(createElement('li',item));
});
*/