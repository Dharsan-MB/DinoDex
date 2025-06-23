// theme.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.getElementById("themeToggle");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(`${savedTheme}-theme`);
  }

  // Toggle button click handler
  toggleBtn.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");

    body.classList.toggle("dark-theme", !isDark);
    body.classList.toggle("light-theme", isDark);

    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
  });
});
