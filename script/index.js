const submit = document.getElementById("submit");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const thankYouBox = document.querySelector(".thank-you-box");
const box = document.querySelector(".box");
const selectionNumber = document.getElementById("selection-number");

submit.addEventListener("click", () => {
  displayWhenSubmitted();
});

document.addEventListener("click", (event) => {
  enableOrDisableSubmit(event);
});

function enableOrDisableSubmit(event) {
  if (event.target.tagName === "BUTTON" && event.target.id.startsWith("btn")) {
    submit.disabled = false;
    submit.classList.add("active");

    loopThroughButtons();
    displaySelectionNumber(event);
    // Add the selected class to the clicked button
    event.target.classList.add("selected");
  } else {
    submit.disabled = true;
    submit.classList.remove("active");
  }
}

function displaySelectionNumber(event) {
  selectionNumber.textContent = event.target.textContent;
}

function loopThroughButtons() {
  [btn1, btn2, btn3, btn4, btn5].forEach((btn) => {
    btn.classList.remove("selected");
  });
}

function displayWhenSubmitted() {
  thankYouBox.style.display = "none" ? "flex" : "none";
  box.style.display = "flex" ? "none" : "flex";
}
