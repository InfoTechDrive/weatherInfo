const getPosition = (position) =>{
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
}

const form = document.querySelector('.top-banner form');
const input = document.querySelector(".top-banner input");
const api = '568fd1b682fd640b46b0a03b2bc58499';
// const inputValue = input.value;
// const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value},uk&APPID=${api}`;
form.addEventListener("submit", e =>{
    e.preventDefault();
    // const inputValue = input.value;
    const api = '568fd1b682fd640b46b0a03b2bc58499';
// const inputValue = input.value;
const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api}`;
    console.log(input.value);
    console.log(url)
    input.value="";
    input.placeholder = "Search for a city";
});
