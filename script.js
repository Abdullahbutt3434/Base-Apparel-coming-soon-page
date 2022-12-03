const btn = document.getElementById("submit");
const emailInput = document.getElementById("email");
const errorIcon = document.querySelector("#error-icons");
const errorText = document.querySelector("#error-emails");

btn.addEventListener("click", () => {
  ValidateEmail(emailInput.value);
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    errorIcon.classList.add("d-none");
    errorText.classList.add("d-none");
    return true;
  }
  console.log(errorIcon);
  console.log(errorText);
  errorIcon.classList.remove("d-none");
  errorText.classList.remove("d-none");
}
