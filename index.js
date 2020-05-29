/*const getPosition = (position) =>{
    //This will get latitude, longitude and accuracy
    let mapLat = position.coords.latitude.toFixed(5);
    let mapLon = position.coords.longitude.toFixed(5);
    let mapAcc = position.coords.accuracy.toFixed(1);
    console.log(`Latitude: ${mapLat}, Longitude: ${mapLon}, Accuracy: ${mapAcc}`)
}
const locationError = error =>{
    switch(error.code){
        case error.PERMISSION_DENIED:
            alert("User denied location permission request");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location is Unavialable");
            break;
        case error.TIMEOUT:
            alert("The request to get location is timed out");
            break;
        default:
            alert("Unknown error occured")
    }
} 
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition, locationError);
}else{
    alert ('Update your browser please')
}*/

const form = document.querySelector('.top-banner form');
const input = document.querySelector(".top-banner input");
const list = document.querySelector(".ajax-section .cities");
const msg = document.querySelector('.msg');
const api = '568fd1b682fd640b46b0a03b2bc58499';
form.addEventListener("submit", e =>{
    e.preventDefault();
    console.log(input.value);
    let loc = input.value;
    let reLoc = 'Search another city 😊';
    // console.log(url) 
    input.value="";
    input.placeholder = `${reLoc} loading...`;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc},&APPID=${api}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@4x.png`
            console.log(data, icon)
            const li = document.createElement("li");
            li.classList.add('city');
            const markup = `<h2 class="city-name" data-name="${name},${sys.country}">
                        <span>${name}</span>          
                        <sup>${sys.country}</sup>        
                    </h2>        
                    <div class="city-temp">
                        ${Math.round(main.temp)}<sup>°C</sup>
                    </div>        
                    <figure>          
                        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>          <figcaption>${weather[0]["description"]}</figcaption>
                    </figure>`; 
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(error => {
            msg.textContent = "Please search for a valid city 😩";
            console.log(error);
        })
        msg.textContent = "";  
        form.reset();  
        input.focus(); 
});