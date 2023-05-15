function refreshTime() {
    var hoursDisplay = document.getElementById("hours");
    var minutesDisplay = document.getElementById("minutes");
    var dateDisplay = document.getElementById("date");
    var item = localStorage.getItem("ampm");
    
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var formattedAMPMTime = formatAMPM(time);
    var date = time.getDate() + " " + Intl.DateTimeFormat('en', { month: 'long' }).format(time);

    if (hours < 10) { hours = "0" + hours };
    if (minutes < 10) { minutes = "0" + minutes };

    hoursDisplay.innerHTML = item != "true" ? hours : formattedAMPMTime[0];
    minutesDisplay.innerHTML = item != "true" ? minutes : formattedAMPMTime[1] + formattedAMPMTime[2];
    dateDisplay.innerHTML = date
}

function refreshGreeting() {
    var greetingDisplay = document.getElementById("greeting");
    var hour = new Date().getHours();

    if (hour >= 0 && hour <= 5) {
        greetingDisplay.innerHTML = "Good Night";
        return;
    };
    if (hour >= 6 && hour <= 11) {
        greetingDisplay.innerHTML = "Good Morning";
        return;
    };
    if (hour >= 12 && hour <= 16) {
        greetingDisplay.innerHTML = "Good Afternoon";
        return;
    };
    if (hour >= 17 && hour <= 21) {
        greetingDisplay.innerHTML = "Good Evening";
        return;
    };
    if (hour >= 22 && hour <= 23) {
        greetingDisplay.innerHTML = "Good Night";
        return;
    }; 
}

function toggleMenu(index) {
    var menuOptions = document.querySelectorAll(".group");

    for (var i = 0; i < menuOptions.length; i++) {
        if (i == index) {
            (function (i) {
                setTimeout(() => {
                    var title = menuOptions[i].querySelector(".group-title");
                    var links = menuOptions[i].querySelector(".hidden");
                    links.classList.remove("hidden");
                    links.classList.add("active");
                    title.classList.remove("group-title");
                    title.classList.add("group-title-active");
                }, 300);
            })(i);
            continue
        }

        menuOptions[i].style.opacity = 0;
        menuOptions[i].style.transition = "opacity ease 0.3s";

        (function (i) {
            setTimeout(() => {
                menuOptions[i].style.display = "none";
                
            }, 300);
        })(i);
    }
}

function back() {
    var menuOptions = document.querySelectorAll(".group");

    for (var i = 0; i < menuOptions.length; i++) {
        var title = menuOptions[i].querySelector(".group-title-active");
        var links = menuOptions[i].querySelector(".active");

        if (title != null && links != null) {
            title.classList.remove("group-title-active");
            links.classList.remove("active")
            title.classList.add("group-title");
            links.classList.add("hidden");
        };

        menuOptions[i].style.display = "grid";
        menuOptions[i].style.opacity = 1;
        menuOptions[i].style.transition = "opacity ease 0.3s";
    }
}

function formatAMPM(currentTime) {
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? " PM" : " AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    return [hours, minutes, ampm]
}

function toggleAMPM() {
    if (localStorage.getItem("ampm") == null) { localStorage.setItem("ampm", "false") };
    if (localStorage.getItem("ampm") == "true") { localStorage.setItem("ampm", "false"); return };
    localStorage.setItem("ampm", "true");
}


setInterval(refreshTime, 1)
setInterval(refreshGreeting, 1)
