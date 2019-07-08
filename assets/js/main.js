// Document object model elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// Show current time and update every second.

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    // Set AM or PM depending on what time it is.
    let AMPM = "";
    if (hour >= 12) {
        AMPM = "PM";
    } else {
        AMPM = "AM";
    }

    // 12 hour format
    if (hour != 12){
        hour = (hour%12);
    };

    // Output our time into the time html element
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${AMPM}`;

    // Call the new time every second
    setTimeout(showTime, 1000);
};

// Fix time format. Minutes and seconds don't show a leading zero.
function addZero(n){
    if(parseInt(n, 10) < 10){
        return ("0" + n);
    } else {
        return n;
    };
};

// Set background image and greeting based on the time of day.
function setGreeting(){
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12 && hour > 5){
        greeting.textContent = "Good Morning, ";
        document.body.style.backgroundImage = "url('../assets/imgs/morning.jpg')";
    } else if(hour < 18 && hour > 12){
        greeting.textContent = "Good Afternoon, ";
        document.body.style.backgroundImage = "url('../assets/imgs/afternoon.jpg')";
    } else {
        greeting.textContent = "Good Evening, ";
        document.body.style.backgroundImage = "url('../assets/imgs/night.jpg')";
        document.body.style.color = "white";
    };
};

// Get user's name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '{{ name }}';
    } else {
        name.textContent =  localStorage.getItem('name');
    }
};

// Set user's name
function setName(event){
    if(event.type === 'keypress'){
        // Validate that the keypress is enter
        if (event.which == 13 || event.keycode == 13){
            localStorage.setItem('name', event.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
}

// Get user's focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '{{ focus }}';
    } else {
        focus.textContent =  localStorage.getItem('focus');
    }
};

// Set user's focus
function setFocus(event){
    if(event.type === 'keypress'){
        // Validate that the keypress is enter
        if (event.which == 13 || event.keycode == 13){
            localStorage.setItem('focus', event.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

// Add listeners for updating preferences.
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run the script!
showTime();

// Set the greeting message and background
setGreeting();

// Set up the storage of the user's name and focuslocally.
getName();
getFocus();