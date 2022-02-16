const clock = document.getElementById("clock");

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertHours(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

function convertHours(time) {
    let format = "AM";
    if (time >= 12) {
        format = "PM";
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time;
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

showTime(); // we call it first be4 setInterval so that 1 sec delay after launching the window is gone
setInterval(showTime, 1000);