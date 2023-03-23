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