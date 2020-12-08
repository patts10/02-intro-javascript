


const name = 'Patts';
const lastName = 'Mendoza';

//const fullName = name + ' ' + lastName;

const fullName = ` ${ name } ${ lastName } `;

console.log( fullName );

function getGretting(name) {
  return `Hello ` + name;
}

console.log( `This is a text: ${ getGretting( fullName )}`);