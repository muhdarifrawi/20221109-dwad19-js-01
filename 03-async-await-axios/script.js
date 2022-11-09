
function apple(){
    getData()
    banana()
}

function banana(){
    console.log("Bananna is here!!!")
}

async function getData(){
    let response = await axios.get("fruits.json")
    console.log(response.data)
    console.log("data fetched!")
}


apple();