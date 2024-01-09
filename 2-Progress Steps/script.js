const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentIndex = 1;

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= circles.length) {
    currentIndex = circles.length;
    nextButton.disabled = true;
  }
  circles[currentIndex - 1].classList.add("active");
  progress.style.width =
    (100 / (circles.length - 1)) * (currentIndex - 1) + "%";

  if (currentIndex > 1) {
    prevButton.disabled = false;
  }
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex <= 1) {
    currentIndex = 1;
    prevButton.disabled = true;
  }

  if (currentIndex < circles.length) {
    nextButton.disabled = false;
  }

  circles[currentIndex].classList.remove("active");
  progress.style.width =
    (100 / (circles.length - 1)) * (currentIndex - 1) + "%";
});
