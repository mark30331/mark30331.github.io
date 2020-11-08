window.addEventListener('load', (event)=>{
    // Setup the variables.
    var text;
    var temp = parseFloat(document.getElementById("currentTemp").textContent);
    var speed = parseFloat(document.getElementById("windSpeed").textContent);

    // Calculate the windchill.
    if (speed >= 3 && temp <= 50){
        text = (parseInt(35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))) + ("℉"));
    } else {
        text = "N/A"
    }

    // Code that puts in the windchill factor.
    const windChill = document.querySelector("#windChill");
    windChill.textContent = text;

})