const userDetailsArray = require('./data');

//[{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, "North Dakota", "Scenty"]

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    if(eachElement["address"]["city"] === "North Dakota"){
    acc.push({id: eachElement.id, name: eachElement.name}, eachElement.address.city, eachElement.company)
    
    }

    return acc;
}, [])

console.log(result)