const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassList();
    panel.classList.add("active");
  });
});

function removeClassList() {
  panels.forEach((el) => {
    el.classList.remove("active");
  });
}
