// create new array
// map through each object in the old array
  // copy name and value to new array 
  // calculate age
        // subtract yearOfBirth from yearOfDeath or new Date() to get age
        // if yearOfDeath does not exist, use: new Date()
  //sort 
  const people = [
    {
      name: "Carly", // Why does it think she is the oldest?
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
  let newArray = people.map(person => ({...person}));
  newArray = newArray.map(person => {
    if (person.hasOwnProperty("yearOfDeath") === true) {
      return {
        name: `${person.name}`,
        age: person.yearOfDeath - person.yearOfBirth
      }
    } else {
      return {
        name: `${person.name}`,
        age: new Date().getFullYear() - person.yearOfBirth
      }
    };
  });

  newArray = newArray.sort((a,b) => a.age - b.age);

  return newArray.at(-1);
};

console.log(findTheOldest(people).name);



// Do not edit below this line
module.exports = findTheOldest;
