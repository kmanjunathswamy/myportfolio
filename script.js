// Toggle mobile menu
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
