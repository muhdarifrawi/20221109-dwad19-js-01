async function getData(){
    let response = await axios.get("product-types.json")
    console.log(response.data)

    for(p of response.data){
        console.log(p)
        let mainContent = document.querySelector("#main-content")

        mainContent.innerHTML += `
            <label>${p.display_name}</label>
            <input type="radio" name="products" value=${p.type} />
        `
    }
}

getData();