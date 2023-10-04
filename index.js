//Code your solutions in this file

//Function 1
const fiveToOneHundred = () => {
    for(let i =5; i <= 100; i++) {
        console.log(i);
    }
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
const betweenTwentyAndForty = num =>{
    return num >20 && num < 40;
};

//Test 
//console.log(betweenTwentyAndForty(35));