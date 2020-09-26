const buttonOne = document.querySelector(".plus-one");
const buttonTwo = document.querySelector(".plus-two");
const projectAboutOne = document.querySelector(".project-about-one");
const projectAboutTwo = document.querySelector(".project-about-two");

function showAboutOne() {
  if (projectAboutOne.classList.contains("hidden")) {
    projectAboutOne.classList.remove("hidden");
  } else {
    projectAboutOne.classList.add("hidden");
  }
}

function showAboutTwo() {
  if (projectAboutTwo.classList.contains("hidden")) {
    projectAboutTwo.classList.remove("hidden");
  } else {
    projectAboutTwo.classList.add("hidden");
  }
}

buttonOne.addEventListener("click", showAboutOne);
buttonTwo.addEventListener("click", showAboutTwo);
