// Document object model elements
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

// Show current time and update every second.

function show_time() {
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
    time.innerHTML = `${hour}<span>:</span>${minutes}<span>:</span>${seconds}`;

    // Call the new time every second
    setTimeout(show_time, 1000);
};

// Fix time format. Minutes and seconds don't show a leading zero.

// Run the script!
show_time();