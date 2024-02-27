document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('container');
    var header = document.getElementById('header');

    container.addEventListener('mouseenter', function() {
        changeText();
    });

    container.addEventListener('mouseleave', function() {
        restoreText();
    });

    function changeText() {
        var currentTime = getCurrentTime();
        header.innerText = currentTime;
        header.style.opacity = 1; // Reset opacity to 1
    }

    function restoreText() {
        header.innerText = 'TIME';
        header.style.opacity = 1; // Reset opacity to 1
    }

    function getCurrentTime() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var timeString = hours + ':' + minutes;
        return timeString;
    }

    // Update the time every second
    setInterval(function() {
        changeText();
    }, 1000);
});
//credits to chatgpt