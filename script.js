const bars = document.querySelector(".bars");
const nav_list = document.querySelector(".nav-list");

console.log(document);
bars.addEventListener("click", function () {
  nav_list.classList.toggle("show");

  if (nav_list.classList.contains("show")) {
    bars.src = "assets/x-lg.svg";
    document.body.style.overflow = "hidden";
    nav_list.style.overflow = "scroll";
  } else {
    bars.src = "assets/bars-solid.svg";
    document.body.style.overflow = "scroll";
    nav_list.style.overflow = "hidden";
  }
});

// If someone doesn't close hamburger menu
// function checkWidth() {
//   if (window.innerWidth > 656) {
//     nav_list.classList.remove("show");
//   }
// }

// setInterval(checkWidth, 1000);
