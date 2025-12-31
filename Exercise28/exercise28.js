
// Async and await

function fetchData (){
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            let good =false; 
            if(good){
                resolve({id: "C12232", name: "geedi", city: "muqdisho"})
            }
            else{
                reject("failed to fetch the user data ")
            }

        }, 2000)

    })
}

async function DisplayData(){
    try{
    const data =await fetchData();
    console.log("User data is ..",data)
    }
    catch(err){
        console.log(err)
    }
} 

DisplayData()