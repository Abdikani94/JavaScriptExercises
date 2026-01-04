

// Async and await 
async function fetchData() {

    console.log(" start fetching data.........")

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    // console.log(response)

    const result = await response.json()
    console.log(result[8].body)
    
}

fetchData();