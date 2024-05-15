const displayInput = document.querySelector("#input");
const buttons = document.querySelectorAll(".optns button");

let display = "";
let leftParam;
let option;
let rightParam;

buttons.forEach((button) => {
  console.log("")
  button.addEventListener("click", () => {
    if (button.innerHTML === "AC") {
      display = "";
      leftParam = undefined;
      option = undefined;
      rightParam = undefined;
      displayInput.value = display;
    } else if (button.innerHTML === "DEL") {
      const displayValue = displayInput.value;
      const lastLetter = displayValue.slice(-1);
      if (
        lastLetter === "/" ||
        lastLetter === "x" ||
        lastLetter === "+" ||
        lastLetter === "-"
      ) {
        option = undefined;
      }
      display = displayValue.slice(0, -1);
      displayInput.value = display;
    } else if (button.innerHTML === "=") {
      display = eval(display);
      displayInput.value = display;
    } else {
      if (button.innerHTML === "/") {
        if (option) {
          display = eval(leftParam + option + rightParam);
          displayInput.value = display;
          leftParam = display;
          rightParam = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const divide = displayInput.value.split("/");
        option = "/";
        leftParam = divide[0];
      } else if (button.innerHTML === "x") {
        if (option) {
          display = eval(leftParam + option + rightParam);
          displayInput.value = display;
          leftParam = display;
          rightParam = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const multiply = displayInput.value.split("x");
        option = "*";
        leftParam = multiply[0];
      } else if (button.innerHTML === "+") {
        if (option) {
          display = eval(leftParam + option + rightParam);
          displayInput.value = display;
          leftParam = display;
          rightParam = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const add = displayInput.value.split("+");
        option = "+";
        leftParam = add[0];
      } else if (button.innerHTML === "-") {
        if (option) {
          display = eval(leftParam + option + rightParam);
          displayInput.value = display;
          leftParam = display;
          rightParam = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const subtract = displayInput.value.split("-");
        option = "-";
        leftParam = subtract[0];
      } else if (button.innerHTML === "%") {
        if (option) {
          display = eval(leftParam + option + rightParam);
          displayInput.value = display;
          leftParam = display;
          rightParam = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const percent = displayInput.value.split("%");
        option = "%";
        leftParam = percent[0];
      } else {
        displayInput.value += button.innerText;
        rightParam =
          displayInput.value.split("/")[1] ||
          displayInput.value.split("x")[1] ||
          displayInput.value.split("+")[1] ||
          displayInput.value.split("-")[1] ||
          displayInput.value.split("%")[1];
      }
    }
  });
});
