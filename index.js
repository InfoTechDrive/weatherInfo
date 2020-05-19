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
