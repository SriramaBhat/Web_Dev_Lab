const formElement = document.getElementById("details-form");
var alphaExp = /^[a-zA-Z]+$/;
var emailExp = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }

    if (formElement[i].id === "name" && !formElement[i].value.match(alphaExp)) {
      alert("Name Contains a number!!");
      return;
    }

    if (
      formElement[i].id === "email" &&
      !formElement[i].value.match(emailExp)
    ) {
      alert("Invalid Email Id!!");
      return;
    }

    if (formElement[i].id === "password" && formElement[i].value.length < 8) {
      alert("Password is too short!!");
      return;
    }
  }

  alert("Successful Registration");
});
