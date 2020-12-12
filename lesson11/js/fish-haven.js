window.addEventListener('load', (event)=>{
    // The urls for the weather api.
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=9ee0b980ffe7ebe51ff7f8eefee156d6&units=imperial";
    const api5url = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=9ee0b980ffe7ebe51ff7f8eefee156d6";
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    // Get the event data for the page.
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Pass the town list from the JSON object.
        const towns = jsonObject.towns;

        // Loop through the list until it finds the Soda Springs data.
        for (i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                // Loop through the event list adding each event to the page
                for (j = 0; j < towns[i].events.length; j++) {
                    // Create an element to hold the event text.
                    let event = document.createElement("p");

                    // Add the text to event.
                    event.textContent = towns[i].events[j];

                    // Add the event to the page.
                    document.getElementById("main-events").appendChild(event);
                };
            };
        };
    });
    // Get the data for current weather in the form of a JSON file
    fetch(apiurl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Set the current condition.
        document.getElementById("current-weather").textContent = jsonObject.weather[0]["main"];

        // Set the current Temperature.
        document.getElementById("currentTemp").textContent = Math.floor(jsonObject.main.temp);

        // Set the highs and lows.
        //document.getElementById("highTemp").textContent = Math.floor(jsonObject.main.temp_max);
        //document.getElementById("lowTemp").textContent = Math.floor(jsonObject.main.temp_min);

        // Set the current humidity.
        document.getElementById("humidity").textContent = Math.floor(jsonObject.main.humidity);

        // Set the current wind speed.
        document.getElementById("windSpeed").textContent = jsonObject.wind.speed;

        // Calculate the windchill.
        windChillCal(jsonObject.main.temp, jsonObject.wind.speed);
    });

    // Get the data for current weather in the form of a JSON file
    fetch(api5url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // Pass the weather list from the json file.
        const weatherList = jsonObject["list"];

        // Setup the days in the week.
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // Setup the counter.
        let num = 0;
        // Loop through each item in the list adding each card.
        for (i = 0; i < weatherList.length; i++) {
            // Find the time stamp and put it in a date object.
            let forcastTime = new Date(weatherList[i].dt_txt)

            // Add the card if the hour is 18.
            if (forcastTime.getHours() == 18){
                // Add one to the counter.
                num = num + 1;

                // Setup the document ids.
                let page_id = "tag" + num;
                let page_img = "img" + num;
                let page_weather = "weather" + num;

                // Convert the temperature from Kelvin to Farenheit.
                let currentTemp = Math.floor((weatherList[i].main.temp - 273.15) * (9 / 5) + 32);

                // tag the day for that card.
                document.getElementById(page_id).textContent = days[forcastTime.getDay()];

                // Add the temperature for that card.
                document.getElementById(page_weather).textContent = currentTemp;

                // Create the image link and add it to the card.
                let imagesrc = 'https://openweathermap.org/img/w/' + weatherList[i].weather[0].icon + '.png';  // note the concatenation
                document.getElementById(page_img).setAttribute('src', imagesrc);
            }
        }
    });
});

// The function calculates the windchill.
const windChillCal = function(temp, speed){
    // Setup the variables.
    var text;

    // Calculate the windchill.
    if (speed >= 3 && temp <= 50){
        text = (parseInt(35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16))) + ("℉"));
    } else {
        text = "N/A"
    }

    // Code that puts in the windchill factor.
    const windChill = document.getElementById("windChill");
    windChill.textContent = text;
};

window.addEventListener('load', (event)=>{
    // Code for getting the current date.
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date()
    var currentDate = days[dateObject.getDay()] + ", " + dateObject.getDate() + " " + months[dateObject.getMonth()] + " " + dateObject.getFullYear();

    // Code that puts in the date.
    const lu = document.querySelector("#lastupdated");
    lu.textContent = currentDate

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    // Code for the toggle function on the menu.
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation')
    
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    // Code for the top banner toggle function.
    var advert = document.getElementById("topBanner")
    if (dateObject.getDay() == 5){
        advert.style.display = "block";
    } else {
        advert.style.display = "none";
    }
})