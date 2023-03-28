const defaultTheme = "light";

function setTheme(theme) {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  header.classList.remove("h-light", "h-dark");
  header.classList.add(`h-${theme}`);
  localStorage.setItem("kd-portfolio-theme", theme);
}

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("change", function () {
  const theme = this.checked ? "dark" : "light";
  setTheme(theme);
});

const storedTheme = localStorage.getItem("kd-portfolio-theme");

if (storedTheme) {
  setTheme(storedTheme);
} else {
  setTheme(defaultTheme);
}
