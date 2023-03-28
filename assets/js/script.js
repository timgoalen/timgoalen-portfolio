// Hamburger menu toggle, from https://www.youtube.com/watch?v=c9jNIYQ1IuI

const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.navbar-links');

responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open');
    responsiveMenuButton.classList.toggle('open');
});

// Close menu when an item is clicked

const allNavLinks = document.querySelectorAll('.navbar-links li');

allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        navBarLinks.classList.remove('open');
        responsiveMenuButton.classList.remove('open');
    })
})

// Pause all audio script, from https://stackoverflow.com/questions/19790506/multiple-audio-html-auto-stop-other-when-current-is-playing-with-javascript

document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

/* Underline active section solution from https://www.w3schools.com/howto/howto_js_active_element.asp */

// Get the container element
var btnContainer = document.getElementById("nav-links");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}