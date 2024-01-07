const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClassFromOthers();
    panel.classList.add("active");
  });
});

const removeActiveClassFromOthers = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
