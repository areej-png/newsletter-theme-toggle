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
//Add newsletter form submission handling
const form = document.querySelector("#newsletterForm");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#message");
form.addEventListener("submit", function(e){
    e.preventDefault();
   const email = emailInput.value.trim();

  if (email && email.includes("@")) {
         message.innerText = "✅ Thanks for subscribing!";
         message.style.color = "green";
         emailInput.value = "";
  } else {
     message.innerText = "❌ Please enter a valid email!";
     message.style.color = "red";
  } 
});



