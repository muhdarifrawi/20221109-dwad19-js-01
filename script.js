async function getData(){
    let apiURL = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"

    let response = await axios.get(apiURL + "?date=2022-11-08")
    console.log(response.data)

    // for(p of response.data){
    //     console.log(p)
    //     let mainContent = document.querySelector("#main-content")

    //     mainContent.innerHTML += `
    //         <label>${p.display_name}</label>
    //         <input type="radio" name="products" value=${p.type} />
    //     `
    // }
}

getData();