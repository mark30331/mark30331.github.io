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