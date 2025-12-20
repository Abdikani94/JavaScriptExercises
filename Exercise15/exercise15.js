
// For of and for in


let students =[{
    name: "Geedi", age :20, City :"Muqdisho"
},
{
    name: "Jimcaale", age : 23, City : "Newyork"
},
{
    name : 'faraax', age: 30, City : "London"
}]

// Companying for of and for in loops 
for (let student of students ){
    for (let key in student){
        console.log(key + ": " + student[key]);
      
   }
     console.log("-----");

}
