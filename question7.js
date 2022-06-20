const userDetailsArray = require('./data');


//Response:
//[
//    [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }],
//    [{id: 600dc3b5c4e60ba2ebf06569, name: Howell Faulkner"}, { city: "Florida" }, { company: "Fleetmix" }]
//]

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    console.log(acc)
    acc.push([{id: eachElement.id, name: eachElement.name}, {city: eachElement.address.city}, {company: eachElement.company}])
    return acc;
}, [])

console.log(result)
