const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");
const menuLinks = document.querySelectorAll(".menu__link");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

menuLinks.forEach(el => {
	el.onclick = () => {
		menu.classList.remove("active")
	}
})

const counters = document.querySelectorAll(".skill__rating-counter"),
  lines = document.querySelectorAll(".skill__rating-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
