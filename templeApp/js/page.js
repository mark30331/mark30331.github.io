window.addEventListener('load', (event)=>{
    // The url of the API that we are using.
    const requestURL = 'https://mark30331.github.io/templeApp/js/jsonfile.json';

    // Fetch the JSON file.
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // When done, save the data to the temples variable.
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];

        // Loop through the list of temples.
        for (i = 0; i < temples.length; i++) {
            // Only Use the Fish Haven, Preston, and Soda Springs.
            if (temples[i].name == 'Provo Temple' || temples[i].name == 'Salt Lake Temple'|| temples[i].name == 'Boise Temple'|| temples[i].name == 'Laie Temple' || temples[i].name == 'Idaho Falls Temple') {
                // Create all the needed elements for the cards.
                let link = document.createElement('a');
                let card = document.createElement('section');
                let cardText = document.createElement('div');
                let townName = document.createElement('h3');
                let motto = document.createElement('h4');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainFall = document.createElement('p');
                let images = document.createElement('img');

                // Add the text to the content.
                townName.textContent = temples[i].name;
                motto.textContent = temples[i].motto;
                yearFounded.textContent = 'Description: ' + temples[i].description;
                population.textContent = 'StreetAddress: ' + temples[i].streetAddress;
                rainFall.textContent = 'Services: ' + temples[i].services;
                
                // Add the photo content.
                
                images.setAttribute('src', temples[i].images);
                images.setAttribute('alt', temples[i].name);
                

                

                // Append the elements to the cardText.
                cardText.appendChild(townName);
                cardText.appendChild(motto);
                cardText.appendChild(yearFounded);
                cardText.appendChild(population);
                cardText.appendChild(rainFall);

                // Append the text and the image to the cards.
                card.appendChild(cardText);
                card.appendChild(images);

                // Set the link for the cards.
                if (temples[i].name == 'Provo Temple'){
                    link.setAttribute('href', '#');
                }
                else if (temples[i].name == 'Salt Lake Temple'){
                    link.setAttribute('href', '#');
                }
                else if (temples[i].name == 'Boise Temple'){
                    link.setAttribute('href', '#');
                }
                else if (temples[i].name == 'Laie Temple'){
                    link.setAttribute('href', '#');
                }
                else if (temples[i].name == 'Idaho Falls Temple'){
                    link.setAttribute('href', '#');
                }
                else {
                    link.setAttribute('#');
                }

                // Append Child to link.
                link.appendChild(card);

                // Add the element to the page as a section.
                document.querySelector('div.temples').appendChild(link);
            }
        }
    });
})









function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Fucntion for slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

