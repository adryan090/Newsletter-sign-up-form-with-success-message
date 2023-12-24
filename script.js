const mainElement = document.querySelector(".main");
const submitButton = document.querySelector(".form .form__button");
const successButton = document.querySelector(".success__button");
const formInput = document.querySelector(".form .form__input");
const formLabel = document.querySelector(".form__label");
const formErrorMsg = document.querySelector(".form__error-msg");
const newsletter = document.querySelector(".newsletter");
const imageContainer = document.querySelector(".image-container");
const successContainer = document.querySelector(".success");
const successMessage = document.querySelector(".success__paragraph");

submitButton.addEventListener("click", () => {
  console.log(formInput.value);
  let isEmailValid = checkEmail(formInput.value);

  if (isEmailValid) {
    showSuccessMessage();
    hideError();
  } else {
    showError();
    formInput.focus();
  }
});

successButton.addEventListener("click", () => {
  dismissSuccessMessage();
  formInput.value = "";
  formInput.focus();
});

function hideError() {
  formErrorMsg.classList.add("hidden");
  formInput.classList.remove("form__input-error");
}
function showError() {
  formErrorMsg.classList.remove("hidden");
  formInput.classList.add("form__input-error");
}

function showSuccessMessage() {
  mainElement.classList.add("main__success-width");
  newsletter.classList.add("hidden");
  imageContainer.classList.add("hidden");
  successContainer.classList.remove("hidden");
  successMessage.innerHTML = `A confirmation email has been sent to <strong>${formInput.value}</strong>. Please
  open it and click the button inside to confirm your subscription`;
}

function dismissSuccessMessage() {
  mainElement.classList.remove("main__success-width");
  newsletter.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  successContainer.classList.add("hidden");
}

function checkEmail(email) {
  const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return validRegex.test(email);
}
