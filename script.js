// "use strict"
// //Arrays
// const friend1 = "Youka Her";
// const friend2 = "Tou Lor";
// const friend3 = "Daul Lor";
// const friend4 = "Imani Hunter";

// //TODO: I was trying to grab the above variables and put them into an array by concatenating "friend" with 1, 2, 3, 4, using a for loop inside of a function.
// /*
// let word = ();
// console.log(word);
// const insertFriendsInArray = () => {
//     for (let i = 1; i < 5 ; i++) {
//         //const word = ()
//         console.log(word);
//     };
// };
// insertFriendsInArray();
// */

// const friendArray = ["Youka Her", "Tou Lor", "Daul Lor", "Imani Hunter"]; console.log(friendArray);
// //select index 0 from array
// console.log(friendArray[0]);
// //select index 0 and a character fro index 0
// console.log(friendArray[0][0] + friendArray[0][1]);
// //showshow many entries are in the array
// console.log(friendArray.length);
// console.log(friendArray.length -1);
// console.log(friendArray.length -2);
// console.log(friendArray.length + 1);

// console.log(friendArray[friendArray.length - 1]);
// console.log(friendArray[friendArray.length - 2]);
// //if the index does not exist, the entry will be added. if it does exist, it will be replaced
// console.log(friendArray[4] = "Dang Vang", friendArray[5] = "Chuckie Vang"); console.log(friendArray);
// console.log(friendArray[friendArray.length -1], friendArray[friendArray.length -2], friendArray[friendArray.length -3]);
// // replace index 3
// friendArray[3] = "Sheng Yang"; console.log(friendArray);
// //remember that you can not replace the entire array when it is a constant but, you can still mutate it
// //console.log(friendArray = ["someone"]); this will send an error

// //Exercise
// //TODO: use a for loop to call a function and return a birthyear, and place those birthyears in an array. 
// //cant get the array to log to the console from out of the forloop
// //maybe turn this all into an object and use a this keyword


// const years = [1990, 1967, 2002, 2018, 2010];

// const calcAge1 = function (birthYear) {
//     return 2021 - birthYear;
// }

// for (let i = 0; i < years.length; i++) {
//     calcAge1(years[i]);
//     const ageArray = [calcAge1(years[i])];
// };

// /////////////////////////////////////////////
// /*
// const calcAge = function (birthYear) {
//     return 2021 - birthYear;
// };

// const years = [1990, 1967, 2002, 2018, 2010];

// //we can place function calls inside as an index of an array, because, they will produce a value
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
// const ages1 = [calcAge(years[years.length - 5]), calcAge(years[years.length - 4]), calcAge(years[years.length - 3]), calcAge(years[years.length - 2]), calcAge(years[years.length - 1])];
// console.log(ages, ages1);

// //Basic array Operations (Methods) to manipulate arrays
// console.log(friendArray);
// console.log(friendArray.push("Vinod"), friendArray);//push. adds "Vinod" at the end of array. returns a length
// console.log(friendArray.pop(), friendArray);//pop. removes last index of the array. also returns the last index which is "Vinod"
// console.log(friendArray.shift(), friendArray); //removes and returns the first index of the arrray
// //we can capture these methods
// const capture1 = friendArray.shift(); console.log(capture1);
// console.log(friendArray);
// //add Youka and tou back
// friendArray[1] = "Youka Her"; friendArray[2] = "Tou Lor"; console.log(friendArray);
// //so I can't add them back in like that, I replaced the indexes doing that 
// //fix. I need Sheng Yang and Dang Vang back
// friendArray[4] = "Sheng Yang" ; friendArray[5] = "Dang Vang"; console.log(friendArray);
// //.indexof 
// console.log(friendArray.indexOf("Chuckie Vang"));
// //.includes
// console.log(friendArray.includes("Sheng Yang")); 
// friendArray.push(2, 3); console.log(friendArray.includes(3)); console.log(friendArray);
// */
// /////////////////////////////////////

// //this was a challenge from a prior part. I forgot to save the other challenges from prior
// /*
// let bill = 300.10 ; 
// let tip = [.15, .20]; 
// let total15 = parseFloat((bill + (bill * tip[0])).toFixed(2));//parseFloat(().toFixed())
// let total20 = parseFloat((bill + (bill * tip[1])).toFixed(2));

// if (bill >= 50 && bill <= 300) {//if the bill is between 50 and 300, tip 15%
//     console.log(`Bill: ${bill}, Gratuity ${tip[0]}: ${ bill * tip[0]}, Total: ${parseFloat((bill + (bill * tip[0])).toFixed(2))}`);
// }else {//any other price, tip 20%
//     console.log(`Bill: ${bill}, Gratuity ${tip[1]}: ${ bill * tip[1]}, Total: ${total20}`);
// };
// */
// /////////////////////////////////
// //Part 2. coding challenge 2 
// /*
// let billArray = [125.00, 555.00, 44.00, 401.10, 1000.00, 2025.00, 40.00, 100.00, 200., 20., 10, 0.25, 1.33 ];
// let tipArray  = [.15, .20]; 

// const calcTip = (bill) => {
//     const yourTotal = bill >= 50 && bill <= 300 ? `Bill: ${bill}, Gratuity: ${tipArray[0]}, Total: ${bill + (bill * tipArray[0])}`: `Bill: ${bill}, Gratuity: ${tipArray[1]}, Total: ${bill + (bill * tipArray[1])}`;
//     console.log(yourTotal);
// };
// //function call, argument of a random number to select an index from the billArray
// calcTip(billArray[Math.floor(Math.random() * (billArray.length))]);
// ///////////////////////////////
// */

// /*
// //CODING CHALLENGE 3
// //BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
// const member = {
//     member1: {
//         name: "Mark Miller" , 
//         mass: 78 , 
//         height: 1.69,
//         calcBMI () {
//             const bmiForm = parseFloat((this.mass) / (this.height **2)).toFixed(2);
//             member.member1.bmi = bmiForm;
//             return bmiForm;
//         }, 
//     },
//     member2: {
//         name: "John Smith", 
//         mass: 92, 
//         height: 1.95,
//         calcBMI () {
//             const bmiForm = parseFloat((this.mass) / (this.height **2)).toFixed(2);
//             member.member2["bmi"] = bmiForm;
//             return bmiForm;
//         }, 
//     },
    
// };
// console.log(member.member1.calcBMI(), member.member2.calcBMI());
// console.log(`${member["member1"]["name"]} has a higher BMI: ${member.member1.bmi} than ${member["member2"]["name"]}'s BMI: ${member.member2.bmi}.`);
// console.log(member);
// console.log("He wanted an if statement, but it's ok");
// ///////////////////////////////////
// */

//Iterationn: the for loop
for (let i = 0; i < 10; i++ ) {
    console.log(`Lifting weights repetition ${i}`);
};

const jonas = [
    "Jonas", "Schmedtmann", 2037 - 1991, "teacher", 
    ["Michael","Peter", "Steven"], true,
];
// if i wanted "Peter"
console.log(jonas[4][1]);//the array in the jonas is [4] and "Peter" is [1]

//log all the items in the array
for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i]); console.log(typeof jonas[i]);//logging the items in the array and what thier types are
};
//log only the array in the jonas array//
for (let i = 4; i < jonas.length; i++) {
    console.log(jonas[i][0], jonas[i][1], jonas[i][2]);//TODO:
};

//fill a new array
const types = []; //create empty array
types[0] = jonas[0]; console.log(types);
for (let i = 0; i < jonas.length; i++) {
    // types[i] = jonas[i];
    types.push(jonas[i]) //fillin the types array with the items from the jonas array using push
    
};
console.log(types);

const years1 = [1991, 2007, 1969, 2020];
const ages2 = [];

for (let i = 0; i < years1.length; i++) [
    ages2.push(2037 -  years1[i])
];
console.log(`ages2 = ${ages2}`);
console.log("hell")
// console.log("continue statement");

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== "string") {
//         continue;//if the index is not a string then continue thru the array
//     }
//     console.log(jonas[i], typeof jonas[i])//if it is a string then log it
// };

// console.log("break");
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === "number") {//if the index is a number it break will break out of hte loop
//         //and no longer log. in this case the only two items that are logged are the first two indexes, because
//         //index 2 is a number and the loop breaks out 
//         break;
//     }
//     console.log(jonas[i], typeof jonas[i]);
// };


// //Looping backwards and loops in loops
// console.log("LOOPING IN REVERSE");

// //normal loop forward
// for (let counter = 0; counter < 4; counter++) {console.log(counter);};

// //loop the above backwards
// for (let counter = 3; counter >= 0; counter--) {console.log(counter);};

// console.log( jonas.length, ".length will log the actual lenght of the array. there are 6 items in this array", 
// jonas.length - 1, " this here is representing the amount of indexes in the array, remember that index starts at 0");

// for (let i = jonas.length - 1; i>= 0; i--) {
//     console.log(i, jonas[i]);
// };

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---------Starting exercise ${exercise}`)
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     };  
// };

// for (let rep1 = 1; rep1 <= 10; rep1++) {
//     console.log("for", `Lifting weights repetitions ${rep1}`);
// };

// let rep2 = 1;
// while (rep2 <= 10) {
//     console.log("while", `Lifting weights repetitions`);
//     rep2++
// };//this while loop does the exact same thing that the for^ loop does



////////////////////////////////
