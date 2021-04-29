/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function responsiveMenu() {
   
  var x = document.getElementsByTagName("nav")[0];
  if (x.className === "open") {
       x.className = "";
  } else {
      x.className = "open";
  }
} 