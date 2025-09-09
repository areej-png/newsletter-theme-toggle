// Add theme toggle functionality
const themeToggle = document.querySelector("#themeToggle");
const body = document.querySelector("body"); 

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerText = "Switch to Light Mode 🌞";
  } else {
    themeToggle.innerText = "Switch to Dark Mode 🌙";
  }
});

