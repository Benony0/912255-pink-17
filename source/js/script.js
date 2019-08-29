var siteNav = document.querySelector(".header__container");
var siteNavBtn = document.querySelector(".header__button-menu");

var link = document.querySelector(".btn-form-submit");
var popup = document.querySelector(".popup__send");
var close = document.querySelector(".btn-popup-send-ok");

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

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  // popup.classList.add("display-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  // popup.classList.remove("display-show");
});
