const formElement = document.getElementById("details-form");
var alphaExp = /^[a-zA-Z]+$/;
var emailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
var passExp = RegExp(
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$"
);
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }

    if (
      formElement[i].id === "userid" &&
      (formElement[i].value.length < 5 || formElement[i].value.length > 12)
    ) {
      alert("Invalid Userid");
    }

    if (
      formElement[i].id === "name" &&
      (!formElement[i].value.match(alphaExp) ||
        formElement[i].value.length < 15)
    ) {
      alert("Name is invalid");
      return;
    }

    if (
      formElement[i].id === "email" &&
      !formElement[i].value.match(emailExp)
    ) {
      alert("Invalid Email Id!!");
      return;
    }

    if (
      formElement[i].id === "password" &&
      (formElement[i].value.length < 8 || formElement[i].value.match(passExp))
    ) {
      alert("Password is Invalid");
      return;
    }
  }

  alert("Successful Registration");
});
