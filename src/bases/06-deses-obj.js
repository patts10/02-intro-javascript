//Destructuración
//Asignación Destructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const retornPersona = ({ clave, nombre, edad, rango = 'Cap' }) => {
  
  // console.log( nombre, edad, rango );

  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1212,
      lng: -12.3232
    }
  }

}


const { nombreClave, anios, latlng:{ lat, lng } } = retornPersona( persona );

// console.log( avenger );
console.log( nombreClave, anios );
console.log( lat, lng );