document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  const hareeAbout = document.querySelector("#about h1 span");

  // Functionality for HAREE (logo)
  logo.addEventListener("mouseenter", function () {
    logo.style.color = "rgb(231, 119, 49)";
  });

  logo.addEventListener("mouseleave", function () {
    logo.style.color = "";
  });

  logo.addEventListener("click", function () {
    alert("Welcome to Harrison Enatama's Portfolio!");
  });

  // Functionality for HAREE in the About section
  hareeAbout.addEventListener("mouseenter", function () {
    hareeAbout.style.color = "rgb(231, 119, 49)";
  });

  hareeAbout.addEventListener("mouseleave", function () {
    hareeAbout.style.color = "";
  });

  function toggleHareeText() {
    hareeAbout.textContent = "a Frontend Developer!";
    setTimeout(function () {
      hareeAbout.textContent = "HAREE"; // Revert back after 2 seconds
    }, 2000); // 2 seconds delay to show "a frontend Developer!"
  }

  // Run the toggle function every 3 seconds
  setInterval(toggleHareeText, 3000);
});
