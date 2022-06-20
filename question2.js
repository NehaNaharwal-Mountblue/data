const userDetailsArray = require('./data');

//Response : 
//{
//    600dc3b5d617e547a0e74cb9: {
//        streetAddress: '48 Flatlands Avenue',
//            neighbour: 'Cutter',
//                city: 'North Dakota'
//    },
//    600dc3b5c4e60ba2ebf06569: {
//        streetAddress: '77 Hemlock Street',
//            neighbour: 'Hasty',
//                city: 'Florida'
//    }

//}

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    console.log(acc)
    acc[eachElement["id"]] = eachElement["address"]
    return acc;
}, {})

console.log(result)
