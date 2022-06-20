const userDetailsArray = require('./data');

//Response: 
//[{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }]

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    if(eachElement["address"]["city"] === "North Dakota"){
        acc.push({id: eachElement.id, name: eachElement.name}, {city: eachElement.address.city}, {company: eachElement.company})
    
    }

    return acc;
}, [])

console.log(result)