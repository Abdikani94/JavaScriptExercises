// Synchronize and Asynchronize 

// Synchronize 


function fetchDataSync () {
   
    alert("Start Fetching data...");
     const user = {
        name: "Abdillahi", id:"C12232", city:"Muqdisho"
     };
     console.log("After fetching data ", user);
}

console.log("Before fetching data ");

fetchDataSync ();

console.log("this code is blocked until data is fetched");



// Asynchronize 

function getUserInfo(callback){
    setTimeout(()=>{
        console.log("Starting fetching data")
        const userInfo = {
            name:"jaamac", city: "London", age: 23, address: "street12"
        }
        callback(userInfo)
    },2000 )
}

console.log("before user info come")

getUserInfo(function(userInfo){
    console.log(userInfo)
})


console.log("is this code blocked ?")
