async function getData(){
    // Using Axios Params to inject Query
    let apiURL = "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast";
    
    let response = await axios.get(apiURL,{
        params:{
            date: "2022-11-07"
        }
    })
    console.log(response.data);

    // === Alternative: Inject via variable ===
    // let dateQuery = "2022-11-08";

    // let response = await axios.get(apiURL + `?date=${query}`
    // })

    // === Alternative: directly change URL ===
    // let dateQuery = "2022-11-08";

    // let response = await axios.get(apiURL + "?date=2022-11-09"
    // })


    let areaMetadata = response["data"]["area_metadata"];
    let items = response["data"]["items"];
    let apiInfo = response["data"]["api_info"];

    console.log("Area Metadata: \n",areaMetadata);
    console.log("Items: \n",items);
    console.log("API Info: \n",apiInfo);

    // creating new div element for metadata content
    let metadataPara =  document.createElement("div");
    
    metadataPara.innerHTML = `
    <table border="1" id="table-1">
        <tr>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
        </tr>
    </table>
    `
    // Append new element into the body of the webpage
    document.body.appendChild(metadataPara);

    let table1 = document.querySelector("#table-1");
    
    for(let m of areaMetadata){
        table1.innerHTML += `
            <tr>
                <td>${m["name"]}</td>
                <td>${m["label_location"]["latitude"]}</td>
                <td>${m["label_location"]["latitude"]}</td>
            </tr>
        `
    }
}

getData();