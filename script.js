// Smooth scroll for anchor links (optional fallback)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Future-ready: Toast message, dark mode, animations, etc.
// You can expand here if you want interactive features.
