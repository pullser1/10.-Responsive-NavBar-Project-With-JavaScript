const navSlide = document.querySelector(".nav-links-cont");
const navBurgerBtn = document.querySelector(".nav-burger-btn");

navBurgerBtn.addEventListener("click", (e) => {
     navSlide.classList.toggle("nav-link-cont-hide");
     navBurgerBtn.classList.toggle("rotateburger");
     
});
