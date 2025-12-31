

// Promise 

function fetchUserData (){
    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{
            const success =true;

            if(success){
                resolve({id:"C12213", name: "jaamac geedi", address: "hodan"})
            }
            else {
                reject("Failed to fetch user data")
            }

        }, 2000)

    })
}

fetchUserData()
.then((data)=> console.log("User data is ",data))
.catch((err)=> console.log(err))
