const formElement = document.getElementById("details-form");
var alphaExp = /^[a-zA-Z]+$/;
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < formElement.elements.length - 1; i++) {
    if (formElement[i].value.trim() === "") {
      alert("Empty Input Fields are present.");
      return;
    }

    if (formElement[i].id === "regno" && formElement[i].value.length !== 12) {
      alert("Invalid Register Number");
      return;
    }

    if (formElement[i].id === "subcode" && formElement[i].value.length !== 7) {
      alert("Invalid Subject Code");
      return;
    }

    if (
      formElement[i].id === "marks-1" ||
      formElement[i].id === "marks-2" ||
      formElement[i].id === "marks-3"
    ) {
      if (formElement[i].value.match(alphaExp)) {
        alert("Marks field contains an alphabet !!");
        return;
      }

      if (
        Number(formElement[i].value) > 20 ||
        Number(formElement[i].value) < 0
      ) {
        alert("Marks out of range");
        return;
      }
    }
  }

  const marks = [];
  for (let i = 0; i < 3; i++) {
    let num = Number(formElement[i + 2].value);
    marks.push(num);
  }

  marks.sort(function (a, b) {
    return a - b;
  });

  const avg = (marks[1] + marks[2]) / 2;
  alert("The average marks of best two tests is: " + avg);
});
