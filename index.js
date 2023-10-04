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
multiplesOfThreeOrFive();