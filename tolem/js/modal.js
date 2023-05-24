const inputs = document.querySelectorAll("input");
const nameinput = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const number = document.querySelector("#number");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

document
  .querySelector("#open-modal-btn")
  .addEventListener("click", function () {
    if (
      !nameinput.value.length &&
      !surname.value.length &&
      !email.value.length &&
      !number.value.length
    ) {
      console.log("нет");
    } else {
      document.getElementById("my-modal").classList.add("open");
    }
  });
document
  .getElementById("close-my-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
  });

document
  .querySelector("#my-modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
