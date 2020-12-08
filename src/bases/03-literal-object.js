



const person = {
  name: 'Tony',
  lastName: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 5554231,
    lat: 14.2322,
    lng: 34.6424222,

  }
};

//console.table ( person );

const person2 = { ...person };
person2.name = 'Peter';

console.log( person );
console.log( person2 );

