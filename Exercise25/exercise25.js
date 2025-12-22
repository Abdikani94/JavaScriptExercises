
// Spread Operator

let Numbers = [1,2,3,4,];

const allNumbers =[...Numbers,5,6,7,8,9]
console.log(allNumbers)


// Rest Operators

function Multiply (...numbers){
    return numbers.reduce((total,num)=> total *num ,1)
}

console.log('The result of multiplied numbers are : ', Multiply(3,5,6,4))