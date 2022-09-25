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
    console.log("error");
};
       
// Iteration 3: Loops
//Lo hago así porque me parece más facil, aunque el enunciado diga loops :)
let driverName = hacker1.toUpperCase().split("").join(" ");
console.log(driverName);

let navigatorName = hacker2.split("").reverse().join("");
console.log(navigatorName);

// BONUS 1
// contar palabras
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue enim sit amet sem imperdiet tempus. Cras maximus libero a velit efficitur ullamcorper. Curabitur ultricies cursus est eget tempus. Vivamus malesuada vitae risus finibus aliquam. Aliquam erat volutpat. Proin porttitor sem vel ullamcorper cursus. Maecenas tincidunt mi sit amet laoreet convallis. Morbi pretium lorem laoreet nibh ultricies, eu blandit magna efficitur. Sed interdum tortor et ipsum ultrices, id ultrices nisl porta. Etiam a porta libero. Cras varius felis augue, eget lobortis purus maximus tincidunt. Pellentesque dictum nisi nec dapibus malesuada. Nulla bibendum nunc purus, at pulvinar turpis consectetur condimentum.
Sed in viverra erat. Integer sollicitudin mi in rutrum suscipit. Quisque diam tortor, tempor finibus ante eu, semper rutrum quam. Sed massa elit, ultrices eu est a, dictum aliquet sapien. Curabitur malesuada eu leo nec ultrices. Etiam nec interdum velit, vitae blandit velit. In placerat volutpat mi, at sagittis ante mattis ut. Sed quis dui quis enim laoreet tincidunt eu eget arcu. Vivamus accumsan at urna ac porttitor. Proin quis orci vestibulum, posuere velit ac, convallis ante. Maecenas accumsan mollis auctor. Donec commodo nisi et imperdiet pulvinar. Sed ut purus eu enim lobortis tincidunt nec congue tortor. Sed pretium diam sit amet metus efficitur consectetur. Phasellus vel vulputate augue.`
let loremNum = loremIpsum.split(" ");
console.log(`The paragraph has ${loremNum.length} words.`);

// el apartado de contar la palabra latina "et", como no especifica si quiere que busquemos et en cualquier posicion, o solo "et" como conjunción y, la busco como et = y ;)
let counter = 0;
for (let i = 0; i < loremNum.length; i++) {
    if (loremNum[i] == "et") {
        counter++;
    };
   
};
console.log(counter)

// BONUS 2
let phraseToCheck = "reconocer";
// creo una array vacia
let checkArr = [];
// hago un loop para meter cada elemento del stringen la array
for (let i = 0; i < phraseToCheck.length; i++){
    checkArr.push(phraseToCheck[i])
};
console.log(checkArr);
//declaro nueva array
let reverseArr = [];
//ahora recorro esa array desde el final al principio y meto los elementos en una nueva array
for(let i = checkArr.length - 1; i >= 0; i--){
reverseArr.push(checkArr[i])
};
console.log(reverseArr)
//convierto la nueva arr a string y la comparo con la string inicial
let newString = reverseArr.join("");

if(phraseToCheck == newString){
    console.log("Las palabras son palíndromos");
}else{
    console.log("Las palabras NO son palíndromos")
};
