const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggleButton.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
