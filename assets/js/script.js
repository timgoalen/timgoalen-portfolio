// Navbar functionality

const navBtn = document.getElementById('nav-btn');
const navBarLinks = document.querySelector('.navbar-links');

let isNavBarOpen = false;

function handleNavBtnClick() {
  if (isNavBarOpen === false) {
    navBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    navBarLinks.classList.add('show-nav-links');
    isNavBarOpen = true;
  } else {
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    navBarLinks.classList.remove('show-nav-links');
    isNavBarOpen = false;
  }
}

navBtn.addEventListener('click', handleNavBtnClick);