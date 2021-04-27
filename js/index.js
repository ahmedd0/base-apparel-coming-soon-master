let emailInput = document.getElementById("emailInput");
let errMsg = document.getElementById("errorMessage");
let errorIcon = document.getElementById("errorIcon")
let EmailRegEx = /^[A-z0-9]{0,}\@[A-z]{3,12}\.[A-z]{3,6}$/;
emailInput.addEventListener("keyup", (e) => {
  let isTrue = EmailRegEx.test(e.target.value);
  if (isTrue) {
    errMsg.classList.add("d-none");
    errorIcon.classList.add("d-none");

  } else {
    errMsg.classList.remove("d-none");
    errorIcon.classList.remove("d-none");


  }
});
