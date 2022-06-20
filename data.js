const userDetailsArray = [
    {
        "id": "600dc3b5d617e547a0e74cb9",
        "name": "Mitchell Fitzgerald",
        "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
        "address": "48 Flatlands Avenue, Cutter, North Dakota",
        address: {
            streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
            city: 'North Dakota'
        },
        "company": "Scenty"
    },
    {
        "id": "600dc3b5c4e60ba2ebf06569",
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
]


module.exports = userDetailsArray;


/*
Q.1 Get all addresses from userDetailsArray using both Map & Reduce and return the result in an array.

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

Q.2 Get all addresses from userDetailsArray using reduce Function and return the result in the following format

Response : 
{
    600dc3b5d617e547a0e74cb9: {
        streetAddress: '48 Flatlands Avenue',
            neighbour: 'Cutter',
                city: 'North Dakota'
    },
    600dc3b5c4e60ba2ebf06569: {
        streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
                city: 'Florida'
    }

}


Q.3 Get all user details in the following object format using reduce.

Response:
{
        600dc3b5d617e547a0e74cb9": {
            "name": "Mitchell Fitzgerald",
            "about": "Proident voluptate veniam voluptate mollit reprehenderit anim officia et ea ex laboris nulla laboris. Nulla ut aliquip fugiat tempor veniam sint aliqua reprehenderit tempor Lorem commodo anim.",
            "address": "48 Flatlands Avenue, Cutter, North Dakota",
            address: {
                streetAddress: '48 Flatlands Avenue',
                neighbour: 'Cutter',
                city: 'North Dakota'
            },
            "company": "Scenty"
        },
        600dc3b5c4e60ba2ebf06569: {
        "name": "Howell Faulkner",
        "about": "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
        address: {
            streetAddress: '77 Hemlock Street',
            neighbour: 'Hasty',
            city: 'Florida'
        },
        "company": "Fleetmix"
    }
}

Q4. Filter out the person who lives in city "North Dakota" using reduce and generate the following result

Response:
{
      600dc3b5d617e547a0e74cb9": {
            information: ["Mitchell Fitzgerald", "North Dakota", "Scenty"]
      }
}

Q5. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
Response: 
[{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, "North Dakota", "Scenty"]


Q6. Filter out the person who lives in city "North Dakota" and transform the result to the following structure. 
Response: 
[{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }]

Q7. Transform into following Object
Response:
[
    [{id: 600dc3b5d617e547a0e74cb9, name: Mitchell Fitzgerald"}, { city: "North Dakota" }, { company: "Scenty" }],
    [{id: 600dc3b5c4e60ba2ebf06569, name: Howell Faulkner"}, { city: "Florida" }, { company: "Fleetmix" }]
]

*/
