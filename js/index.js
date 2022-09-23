console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Enric";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Pablito";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}else if (hacker1.length < hacker2.length ) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length == hacker2.length ){
    console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`);
} else {
    console.log("error")
};
       
// Iteration 3: Loops
let driverName = hacker1.toUpperCase()
let driverNameUpper = driverName.split("");
let driverNameSplit = driverNameUpper.join(" ")
console.log(driverNameSplit);






let navigatorName = hacker2.split("");
let navigatorNameArr = navigatorName.reverse();
let navigatorNameRevserse = navigatorNameArr.join("");
console.log(navigatorNameRevserse);
