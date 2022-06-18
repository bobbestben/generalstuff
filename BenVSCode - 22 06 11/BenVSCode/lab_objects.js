const dog = {
    name : 'bobo',
    age : 8,
}

console.log(dog)
console.log(dog.name)
console.log(dog.age)
console.log(dog['name'])

const { name1: newdogname = "dead dog" } = dog
console.log('newdogname',dogname)


/* const celebrity = {
    name: 'gey',
    age: 33,
    isCurrentlyTweeting: true,
}
console.log(celebrity)
if (celebrity.isCurrentlyTweeting) {
    console.log("Turn off twitter")
} */

/*const macros = {} //empty object

macros.key1 = 'value1'
macros.protein = 'tempeh'
macros.carbohydrates ='spuds'
macros.fats = 'olive oil'
console.log(macros) */


//Q2 - 2. Create an object called guitar
/* const guitar = {
    strings: 6
}
guitar.strings = 7,
guitar.belongsTo = 'mememememe'
console.log(guitar)
*/


//Q3. Bracket Notation
const testObject = {
    'this is a test' : 'test',
}
console.log(testObject['this is a test'])

testObject['2'] = "I'm just messing around with objects"
console.log(testObject)
//note that key '2' is added 2nd
//but when console.log appears at 1st due to alphabetical order




// Q4: Conditionals
// Given the following object:

/*const ethan = {
  age: 30,
  name: 'Ethan'
};

if (ethan.age >= 30) {
    console.log('youngman')
}
if (!ethan.something) {
    console.log('no such')
}
*/
// console.log 'You are still young' if ethan age is >= 30
// console.log 'No such property' if ethan.something is undefined

const ethan = {
    name: 'Ethan',
    age: 35,
    isHappy: true,
    workHistory: [{
      name: 'Company A',
      title: 'Associate',
      salary: 1_000
    }],
    greet: function() { console.log('hello') }
  };
  
  const { name, age } = ethan;
  
  console.log('name: ', name);
  console.log('age: ', age);

  /*const { name: ethanName, age:ethanAge } = ethan;
  same as
  const ethanName = ethan.name
  const ethanAge = ethan.age */

//Creating new variable
//const { xx: ethenName = 'New name', yy: ethanAge = 34 } = ethan;
//is same as
//const ethanAge = ethan.yy || 34
//if ethanName which is = to ethan.xx is undefine
//then assign new name using OR || operator

//const ethanName = ethan.name || 'New name';
//console.log('ethanName',ethanAge)

console.log('Now using de-structured syntax')
const { xx: ethanName = 'New name', yy: ethanAge = 34 } = ethan;
console.log(ethanName,ethanAge)


//Spread Operator
const arr = [1,2,3]
const newarr = [...arr, [...arr,...[arr]]]
console.log(newarr)
console.log(newarr[3][3][2])