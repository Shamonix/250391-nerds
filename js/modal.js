var link = document.querySelector(".footer-button");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("username");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt){
  if (!username.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и электронную почту");
    popup.classList.add("modal-error");
    popup.offsetWidth = popup.offsetWidth;
  } else {
    localStorage.setItem("username", username.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});