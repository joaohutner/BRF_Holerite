window.onload = function() {
    const api_url = 'http://brf-app-hrplatformapi-qas.azurewebsites.net/api/CSC/GetIRPF?userId=598761';
    
    var myInit = { 
        method: 'GET',
        headers: {"apiKey": "98a0011d-1f35-46a1-9259-46f3fae601f4"},
        };

    const response = await fetch(api_url,myInit)

    if (response.ok){
        let myJson = await response.json(); 
        console.log(myJson);
        document.getElementById("post").innerHTML="PDAOSKPODSAKPOD"
    }else{
        alert("HTTP-Error: " + response.status);
    }
};