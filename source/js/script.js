var siteNav = document.querySelector(".header__container");
var siteNavBtn = document.querySelector(".header__button-menu");

siteNav.classList.remove("header__container_nojs");

siteNavBtn.addEventListener("click", function() {
  if (siteNav.classList.contains("header__container_closed")) {
    siteNav.classList.remove("header__container_closed");
    siteNav.classList.add("header__container_opened");
  } else {
    siteNav.classList.add("header__container_closed");
    siteNav.classList.remove("header__container_opened");
  }
});
