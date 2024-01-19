// scripts/menu.js

function toggleMenu() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

document.addEventListener('mouseup', function (e) {
  var dropdownMenu = document.getElementById("dropdownMenu");
  if (e.target !== dropdownMenu && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});
