const hamburger = document.querySelector(".hamburger-menu-icon");
const linksContainer = document.querySelector(".links-container");

hamburger.addEventListener("click", () => {
  if (linksContainer.style.top === "-12rem") {
    linksContainer.style.top = "4rem";
  } else {
    linksContainer.style.top = "-12rem";
  }
});
