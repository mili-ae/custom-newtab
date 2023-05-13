function refreshTime() {
    var hoursDisplay = document.getElementById("hours");
    var minutesDisplay = document.getElementById("minutes");
    var dateDisplay = document.getElementById("date");
    var time = new Date();
    var hour = time.getHours()
    var min = time.getMinutes()
    var date = time.getDate() + " " + Intl.DateTimeFormat('en', { month: 'long' }).format(time);

    if (hour < 10) { hour = "0" + hour };
    if (min < 10) { min = "0" + min };

    hoursDisplay.innerHTML = hour;
    minutesDisplay.innerHTML = min;
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



setInterval(refreshTime, 1)
setInterval(refreshGreeting, 1)
