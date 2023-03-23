const responsiveMenuButton = document.getElementById('responsiveMenuToggleButton');

const navBarLinks = document.querySelector('.navbar-links');

responsiveMenuButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('open');
    responsiveMenuButton.classList.toggle('open');
});

// Pause all audio script, from

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);