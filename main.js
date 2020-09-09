const api = {
    key: "61f348d30fa3af52a6b4e7aaa330f626",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.getElementById('search');
searchbox.addEventListener('keypress', setQuery);
function setQuery( evt){
    if( evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
   

}
function getResults( query ){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults( weather){
    let city = document.getElementById('state')
    city.innerText = `${weather.name},${weather.sys.country}`;

   
    let temp = document.getElementById('temp')
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
    let element = document.getElementById('condition');
    element.innerText = weather.weather[0].main;
}
