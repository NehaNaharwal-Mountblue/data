const userDetailsArray = require('./data');

/* Response:
{
      600dc3b5d617e547a0e74cb9": {
            information: ["Mitchell Fitzgerald", "North Dakota", "Scenty"]
      }
} */

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    if(eachElement["address"]["city"] === "North Dakota"){
        acc[eachElement["id"]] = {information: [eachElement.name, eachElement.address.city, eachElement.company ]}
    
    }

    return acc;
}, [])

console.log(result)