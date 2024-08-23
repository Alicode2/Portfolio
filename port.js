document.addEventListener("DOMContentLoaded", function () {
  const projectLinks = document.querySelectorAll(".view-project");

  projectLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Project details will be available soon!");
    });
  });
});
