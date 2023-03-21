// Nav bar base on tutorial - https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }