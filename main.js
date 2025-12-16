// console.log("Hello world!");

// let var const

//let 

 let name ="jamac"
// console.log(name)

name="geedi"
console.log(name)

//const

const age =20
console.log(age)

console.log("My name is "+ name + " and I am " + age + " years old")


// Arithmatic Operators

//Add  subtruct and times

let x =20
let y =10
console.log("the addition of x + y is :", x+y)
console.log("the addition of x + y is :", x-y)
console.log("the addition of x + y is :", x*y)

//equal not equal

let h =20
let g= '20'

console.log("the equality of h and g is: ", h==g)
console.log(" h and g is not equal!: ", h!=g)

//Stricty equal and stricty not equal

console.log( "the Stricty equality of h and g is: ", h===g)
console.log( " h and g of stricty not equal is!: ", h!==g)

//Greater than less then
console.log("h is greater than g ! is that true or false :",h>g)
console.log( "h is less than g ! is that true or false :",h<g)

//Greater then or qual  and  Less then or equal

console.log("h is greater then or equal to g is that true or false, it's: ",h>=g)
console.log("h is Less then or equal to g is that true or false, it's: ",h>=g)



//Logical operators AND(&&), OR(||) , NOT(!)

let isAdult=true
let hasPermission =false

console.log("if this person is adult and has permission he can enter is he adult and hasperssion!: ",isAdult && hasPermission)

console.log("if this person is adult or haspermission he can enter if he has one of them ", isAdult || hasPermission)

console.log("Not ! make reverse if is adult was true it turns to false and haspermission was false turns to true :  ", !isAdult)
console.log("Not ! make reverse if is adult was true it turns to false and haspermission was false turns to true :  ", !hasPermission)


//Functions

function greet (){
    console.log("hello jamac")
}

greet()

function salaan( name ){
    console.log("hello "+name)

}

salaan("Abdi kani")
salaan("Jimcaale")
salaan("Fardowsa")
salaan("Xamdi")
salaan("Farxaan")



function calculateTotal(price , quantity){
    console.log("the total price  is: $"+price*quantity)

}

calculateTotal(10,2)
calculateTotal(3,10)
calculateTotal(2,20)
calculateTotal(20,6)

//Retun function

function Addition(a , b){
    return a+b;
}
// console.log(Addition(10,6));

let result =Addition(10,6);
console.log("the Result is: "+result/2);


function sub(v, w){
    return v-w;
}

let qimahasoharay = sub(10,5)
console.log("the result of subtraction v and w added by 3 is: "+qimahasoharay + 3)


function add(a,z){
    return a+z
}
let natija = add(20,5)
console.log("The result addition of 20 and 5 is: "+natija)


//function expression 

const addd =function(a,b){
    console.log("the addition of a + b is: ",a+b)
}

addd(10,2)
addd(10,5)
addd(20,6)
addd(5,4)
addd(9,2)

