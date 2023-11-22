const mode = document.getElementById("mode");
const body = document.getElementById("body");
const count = document.getElementById("count");

mode.addEventListener("click", (eo) => {
  count.classList.toggle("dark");
});
