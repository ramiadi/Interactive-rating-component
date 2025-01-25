const submit = document.getElementById("submit");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const selectionNumber = document.getElementById("selection-number");

submit.addEventListener("click", () => {
  displayWhenSubmitted();
});

document.addEventListener("click", (event) => {
  enableOrDisableSubmit(event);
});

// This function will enable or disable the submit button
function enableOrDisableSubmit(event) {
  // Check if the target is a button and if the button id starts with btn
  if (event.target.tagName === "BUTTON" && event.target.id.startsWith("btn")) {
    submit.disabled = false;
    submit.classList.add("active");
    loopThroughButtons();
    displaySelectionNumber(event);
    event.target.classList.add("selected");
  } else {
    submit.disabled = true;
    submit.classList.remove("active");
    loopThroughButtons();
  }
}

// This function will display the selected number in the selection number
function displaySelectionNumber(event) {
  selectionNumber.textContent = event.target.textContent;
}

// This function will loop through the buttons and remove the selected class
function loopThroughButtons() {
  [btn1, btn2, btn3, btn4, btn5].forEach((btn) => {
    btn.classList.remove("selected");
  });
}

// This function will display the thank you message when the submit button is clicked
function displayWhenSubmitted() {
  document.querySelector(".thank-you-box").style.display = "none"
    ? "flex"
    : "none";
  document.querySelector(".box").style.display = "flex" ? "none" : "flex";
}
