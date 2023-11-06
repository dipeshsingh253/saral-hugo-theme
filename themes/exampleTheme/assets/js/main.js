
document.addEventListener("DOMContentLoaded", function () {
  var openMenuButton = document.getElementsByClassName("open-menu-button")[0];
  var closeMenuButton = document.getElementsByClassName("close-menu-button")[0];

  var menu = document.getElementsByClassName("menu")[0];

  function updateMenuDisplay() {
    if (window.innerWidth < 768) {
      // Mobile view
      menu.style.display = "none";
      openMenuButton.style.display = "block";
    } else {
      // Desktop view
      menu.style.display = "flex";
      openMenuButton.style.display = "none";
    }
  }

  // Initial setup
  updateMenuDisplay();

  window.addEventListener("resize", updateMenuDisplay);

  if (openMenuButton) {
    openMenuButton.onclick = function () {
      menu.style.display = "flex";
      openMenuButton.style.display = "none";
    };
  }

  if (closeMenuButton) {
    closeMenuButton.onclick = function () {
      menu.style.display = "none";
      openMenuButton.style.display = "block";
    };
  }

});
