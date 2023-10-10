/*Hey Angelica and Nicole! Thanks for the submission! You both showed a solid understanding of the logic of these problems. I provided some feedback on some of the code and main takeaways at the end.*/
//Code your solutions in this file

//Function 1
const fiveToOneHundred = () => {
    for(let i =5; i <= 100; i++) { //small thing but make sure to have space before and after operators (i =5)
        console.log(i);
    }//if you are going to use semicolons, be consistent. 
}
//Test 
//console.log(fiveToOneHundred());

//Function 2
const multiplesOfThree = () => {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0){
            console.log(i);
        }; 
    };
};

//Test
//multiplesOfThree();

//Function 3
const multiplesOfThreeOrFive = () => {
    for(let i = 1; i <= 100; i++){
        if ((i % 3 === 0)  || (i % 5 === 0)){
            console.log(i)
        };
    };
};

//Test 
//multiplesOfThreeOrFive();

//Function 4
const untilNum = num => {
    for (i = 1; i <= num; i++){
        console.log(i);
    };
};

//Test
//untilNum(9);

//Function 5
const multiply = (num1, num2) => {
    return num1 * num2;
}
//Test
//console.log(multiply(5,6))

//Function 6
const add = (num1, num2) => {
    if (num1 === num2){
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    };
};
// this code could have been refactored using the ternary operator.

//Test
//console.log(add(3, 4));

//Function 7
const isNegative = (num) => {
     return num < 0;
};

//Test 
//console.log(isNegative(-90));

//Function 8
const triangleArea = (height, base) => {
    return height * base * .5;
};

//Test
//console.log(triangleArea(5, 7));

//Function 9 
const betweenTwentyAndForty = num =>{// there is a typo in function name. (betweenTwentyAndFourty)
    return num >20 && num < 40;
};

//Test 
//console.log(betweenTwentyAndForty(35));

//Function 10
const largest = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3){
        return num1;
    } else if (num2 >= num3){
        return num2;
    } else {
        return num3;
    };
};
//This could have been refactored using the Math.max method. Look into it and see if you can redo it (optional).

//Test
//console.log(largest(4, 6, 8));

//bonus, nicole's take <3
//11
const printTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
};
//console.log(printTime());

//12
const isLeapYear = year => {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0){
        return true;
    } else {
        return false;
    };
};
//console.log(isLeapYear(1999));

//13
const getExtension = filename => {
    return filename.slice(filename.indexOf('.'));
};
//console.log(getExtension('hello.txt'));

//14
const absoluteNineteen = num => {
   if (num > 19) {
    return (Math.abs(num - 19)) * 3;
   } ;
   return Math.abs(num - 19);
};
//console.log(absoluteNineteen(20));

//15
const switchLetters = string => {
    let newString = string[string.length - 1] + string.slice(1, string.length - 1) + string[0];
    return newString;
};
//console.log(switchLetters('hello world'));

//16
const changeString = string => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
          } else if (char >= 'A' && char <= 'Z') {
                result += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
          } else {
            result += char;
          };
        };
    return result;
};
//console.log(changeString('meow meow!!'));

/*
Hey Angelica and Nicole.
Fantastic work here. Your code is 99.5% clean and solves all the problems. I gave you some feedback on how to clean up your code and what you can do to elevate your code to the next level. 

Great work!!

*/
