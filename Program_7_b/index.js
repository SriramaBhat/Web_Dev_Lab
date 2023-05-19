const formElement = document.getElementById("details-form");
const receivedContainerElement = document.getElementById("received-container");
const receivedElement = document.getElementById("received");
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  let values = "";
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      values = "Some of the inputs are Empty!!!";
    }

    if (formElement[i].type === "email") {
      if (
        !formElement[i].value.includes("@") ||
        !formElement[i].value.includes(".")
      ) {
        values = "Some input values are invalid. Check the inputs";
        break;
      }
    }

    if (formElement[i].name === "Gender") {
      if (
        formElement[i].value.toUpperCase() !== "MALE" &&
        formElement[i].value.toUpperCase() !== "FEMALE" &&
        formElement[i].value.toUpperCase() !== "OTHERS"
      ) {
        values = "Some input values are invalid. Check the inputs";
        break;
      }
    }

    if (formElement[i].name === "Mobile-Number") {
      if (formElement[i].value.length !== 10) {
        values = "Some input values are invalid. Check the inputs";
        break;
      }
    }
  }
  if (values === "") {
    for (let i = 0; i < formElement.elements.length - 1; i++) {
      values += formElement[i].name;
      if (
        formElement[i].name === "Mobile-Number" ||
        formElement[i].name === "Favourite-Color"
      ) {
        values += ":\t\t";
      } else {
        values += ":\t\t\t\t";
      }
      values += formElement[i].value;
      values += "\n";
    }
  }
  if (
    values === "Some of the inputs are Empty!!!" ||
    values === "Some input values are invalid. Check the inputs"
  ) {
    receivedElement.style.textAlign = "center";
  } else {
    receivedElement.style.textAlign = "left";
  }
  receivedElement.value = values;
  receivedContainerElement.style.display = "block";
});
