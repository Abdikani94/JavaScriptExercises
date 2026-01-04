

// Callback

// function greet (name){
//     console.log("Hello "+ name)
// }

// function EnterUserName(Callback){
//     const name = prompt ("Enter your name ")
//     Callback(name)
// }
// EnterUserName(greet);

function operate (a,b, Callback){
    return Callback(a,b)
}

function Multiply (a,b){
    return a*b 
}

function Dividing(a,b){
    return a / b
}

console.log("Multiplication of a and b is: ", operate(3,4 , Multiply))

console.log("Divistion of a and b is: ", operate(10,2 , Dividing))