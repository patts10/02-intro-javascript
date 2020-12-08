

  //Functions in JS
  //const saludar = function( nombre ) {
  //   return `Hola ${ nombre }`;
  //}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hello World`;

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => ( {
  uid: 'ABC123',
  username: 'Pepito'
});

const user = getUser();
console.log( user );



  const getUsuarioActivo = ( nombre ) => ({
    uid:'ABC567',
    username: nombre
  });

  console.log( getUsuarioActivo('Patts') );

