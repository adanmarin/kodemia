const nombre="Marin";
const apellido="Ibarra";

const crearNombre = (nombre="Default name",apellido="Default Last name") => {
    
    const persona = {
        nombre:nombre,
        apellido:apellido,
        nombreCompleto: () =>{
            return nombre + ' ' + apellido;
        }
    };
    return persona;
};


const nombreCompleto=crearNombre(nombre,apellido);
/*console.log(nombreCompleto.nombre);
console.log(nombreCompleto['apellido']);*/
console.log(nombreCompleto.nombreCompleto());