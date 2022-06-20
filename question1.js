const userDetailsArray = require('./data');

Response : 
[{
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        }, {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
}]

const result = userDetailsArray.reduce((acc, eachElement, index, arr) => {
    console.log(acc)
    acc[eachElement.id] = eachElement.address
    return acc;
}, {})


console.log(result);