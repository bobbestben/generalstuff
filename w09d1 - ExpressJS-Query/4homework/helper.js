//X-files homework
//Due 14 Jul 22

// access the data in this file
// const sightingsData = require('../sightings.json')

const sightingsData = [
    {
        date: "1/31/15 22:00",
        city: "Lancaster",
        state: "CA",
        shape: "Sphere",
        duration: "several minutes",
        description: "Orange lights.",
    },
    {
        date: "1/31/15 21:30",
        city: "Conway",
        state: "SC",
        shape: "Fireball",
        duration: "5 minutes",
        description:
            "9 bright orange fireballs falling to the ground from the sky...",
    },
];
// const my object = {
// date	:	1/31/15 22:00
// city	:	Lancaster
// state	:	CA
// shape	:	Sphere
// duration	:	several minutes
// description	:	Orange lights.

// }

//array of objects
// console.log(sightingsData);

//access the argument
//type node helper.js state=SC (this line will be passed to process.argv)
// console.log('processarg',process.argv); // = [node helper.js state=SC]
// const stateArg = process.argv[2];
// console.log('statearg',stateArg);

// split the stateArg by "=" and assign values to key-val
// const [key, val] = stateArg.split("="); // state , SC

// const results = sighthingsData.filter((s) => {
//     return s.state == val;
//     //returns sightings data where the 'state' key == SC
// });

// console.log(results);
