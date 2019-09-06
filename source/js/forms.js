var form = document.querySelector(".form");
var link = document.querySelector(".btn-form-submit");
var popup = document.querySelector(".popup__send");
var close = document.querySelector(".btn-popup-send-ok");

// link.addEventListener("click", function (evt) {
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  popup.classList.remove("hidden");
  // popup.classList.add("display-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hidden");
  // popup.classList.remove("display-show");
});
