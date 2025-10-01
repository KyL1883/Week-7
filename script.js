console.log ("work")

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages", ages);
let ageMinus = ages[ages.length - 1] - ages[0];
console.log("ageMinus", ageMinus);



ages.push(100)
console.log("Ages with pushing another value or new value", ages);
let ageMinusPush = ages[ages.length - 1] - ages[0];
console.log("ageMinusPush", ageMinusPush);


let sumOfAges = 0;

for(let i = 0; i < ages.length; i++) {
    sumOfAges += ages[i]
    console.log("index:", i, "sumOfAges:", sumOfAges)
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Aveerage is: ", average)



let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalCharacters = 0;

for (let i = 0; i < names.length; i++) {
    totalCharacters += names[i].length;
    console.log("index:", i, "name:", names[1], "totalCharacters:", totalCharacters);
}
let averageName = totalCharacters / names.length;
console.log("The Average of Names:", averageName);

let concatNames = "";
for (let i = 0; i < names.length; i++) {
//    console.log(i, "test");
concatNames = concatNames.concat(names[i] + " ")
console.log(i, "Concatinated", concatNames)
}

console.log("Last element of ages array:", ages[ages.length - 1]);


console.log("First element of ages array:",ages[0]);

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
//    console.log(i, "Test");
nameLengths.push(names[i].length)
console.log("Name and lengths array:", nameLengths);
}

let charactersTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
//    console.log(i, "Test");
charactersTotal += nameLengths[i]
console.log("Character Total:", charactersTotal);
}

function concatWords(word, n) {
console.log("Word Part:", word, "n Part:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);

function fullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    console.log(fullName);
}
fullName("John", "Marston");

let num1 = [1, 2, 3, 4, 5]
let num2 = [20, 30, 40, 50]

function sumNumbersArrays(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
//        console.log(i, "Test");
        total += array[i]
        console.log("Total:", total);
    }

    if (total > 100) {
        console.log(total, true);
        return true
    }   else {
        console.log(total, false);
        return false
    }
}
sumNumbersArrays(num2)


function calculateNumbersAverage(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
//        console.log(i, "Test");
        total += array[i];
        console.log("Func, total: ", total)
    }

let average = total / array.length;
    console.log("Numbers with average", average);
    return average;
}
calculateNumbersAverage(num1);

let numbers3 = [100, 100, 100];
let numbers4 = [50, 50, 49];

function twoAverages(array1,array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
for (const number of array1) {
    total1 += number
    console.log("num:", number, "Tot", total1);
}
for (const number of array2) {
    total2 += number;
    console.log("Current num", number, "Tot2", total2);
}

let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log("Aveerages", average1, average2);

if (average1 > average2) {
    console.log(true);
    return true;
} else if (average1 < average2) {
    console.log(false);
    return false;
} else {
    console.log("Averages are equal");
}
}
twoAverages(numbers3, numbers4);


function willBuyDrink(isHotOutside, moneyInPocket) {
    console.log("Parameters:", isHotOutside, moneyInPocket);
    let buyDrink = isHotOutside === true && moneyInPocket > 10.50;
    console.log("Buy a drink?", buyDrink)
    return buyDrink;
}

willBuyDrink(true, 11);

