const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "11383f06a43fd5c3c743ac7d5f5120f6";

const input = document.querySelector("#getValue")
input.addEventListener("keypress",query)

const query = (e) => {
    if(e.keyCode == 13){
        getQuery(input.value)
    }
}

const getQuery = (city) =>{
    const query = `${url}?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(response =>{
        return response.json()
    })
    .then(displayResult)
}