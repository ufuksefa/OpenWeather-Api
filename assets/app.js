const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "11383f06a43fd5c3c743ac7d5f5120f6"; // There is a link in the readme.md file

const input = document.querySelector("#getValue")
input.addEventListener("keypress",query =(e)=>{
    if(e.keyCode == 13){
        getQuery(input.value)
    }
})


const getQuery = (city) =>{
    const query = `${url}?q=${city}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(response =>{
        return response.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{

    const displayCity = document.querySelector(".city")
    displayCity.innerText = `${result.name} - ${result.sys.country}`

    const displayDegress = document.querySelector(".degrees")
    displayDegress.innerHTML = `${Math.round(result.main.temp)} °C`

    const weather = document.querySelector(".weather")
    weather.innerText = `${result.weather[0].description}`

    const minmax = document.querySelector(".min-max")
    minmax.innerText = `${Math.round(result.main.temp_min)}° / ${Math.round(result.main.temp_max)}°`
    

}