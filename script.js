fetch('fruits.json').then((response)=>{
    return response.json()
}).then(function(json){
    console.log(json);
}).catch(function(error){
    console.log(error)
})
