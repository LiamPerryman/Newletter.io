// Prevents refresh on enter
const form = document.querySelector(".form");
form.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

// Loading
window.addEventListener(`load`, function () {
  this.setTimeout(function () {
    document.querySelector(`.loading`).classList.remove(`show`);
    document.querySelector(`.wrapper`).classList.remove(`hidden`);
    document.querySelector(`.loading`).classList.add(`hidden`);
  }, 3000);
});

setTimeout(function () {
  document.querySelector(`.wrapper`).classList.add(`loaded-opacity`);
  document.querySelector(`.wrapper`).classList.remove(`loading-opacity`);
}, 3100);

123; // Invalid email
const input = document.querySelector(`.email-input`);
const invalidEmail = document.querySelector(`.invalid-email`);
const wrapper = document.querySelector(`.wrapper`);
const thanks = document.querySelector(`.thanks-container`);
const remove = function () {
  input.classList.remove(`valid`);
  input.classList.add(`invalid`);
  invalidEmail.classList.remove(`hidden`);
};

const addwhite = function () {
  input.classList.add(`valid`);
  input.classList.remove(`invalid`);
  invalidEmail.classList.add(`hidden`);
};
const getValue = function () {
  console.log(input.value);
  console.log(input.value.split(``));
  return input.value;
};

document.querySelector(`.btn`).addEventListener(`click`, function () {
  getValue();

  if (input.value.includes(`@`)) {
    addwhite();
    wrapper.classList.add(`hidden`);
    thanks.classList.remove(`hidden`);
  } else if (!input.value.includes(`@`)) {
    remove();
  }
});
document
  .querySelector(`.email-input`)
  .addEventListener(`keypress`, function (e) {
    getValue();
    if (e.key === `Enter`) {
      if (input.value.includes(`@`)) {
        addwhite();
        wrapper.classList.add(`hidden`);
        thanks.classList.remove(`hidden`);
      } else if (!input.value.includes(`@`)) {
        remove();
      }
    }
  });
document
  .querySelector(`.email-input`)
  .addEventListener(`keypress`, function (e) {
    getValue();
    if (e.key) {
      if (input.value.includes(`@`)) {
        addwhite();
      } else if (!input.value.includes(`@`)) {
        remove();
      }
    }
  });
