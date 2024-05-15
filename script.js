const displayInput = document.querySelector("#input");
const buttons = document.querySelectorAll(".optns button");

let display = "";
let temp;
let option;
let temp2;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML === "AC") {
      display = "";
      temp = undefined;
      option = undefined;
      temp2 = undefined;
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
          display = eval(temp + option + temp2);
          displayInput.value = display;
          temp = display;
          temp2 = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const divide = displayInput.value.split("/");
        option = "/";
        temp = divide[0];
      } else if (button.innerHTML === "x") {
        if (option) {
          display = eval(temp + option + temp2);
          displayInput.value = display;
          temp = display;
          temp2 = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const multiply = displayInput.value.split("x");
        option = "*";
        temp = multiply[0];
      } else if (button.innerHTML === "+") {
        if (option) {
          display = eval(temp + option + temp2);
          displayInput.value = display;
          temp = display;
          temp2 = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const add = displayInput.value.split("+");
        option = "+";
        temp = add[0];
      } else if (button.innerHTML === "-") {
        if (option) {
          display = eval(temp + option + temp2);
          displayInput.value = display;
          temp = display;
          temp2 = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const subtract = displayInput.value.split("-");
        option = "-";
        temp = subtract[0];
      } else if (button.innerHTML === "%") {
        if (option) {
          display = eval(temp + option + temp2);
          displayInput.value = display;
          temp = display;
          temp2 = 0;
          option = undefined;
        }
        displayInput.value += button.innerText;
        const percent = displayInput.value.split("%");
        option = "%";
        temp = percent[0];
      } else {
        displayInput.value += button.innerText;
        temp2 =
          displayInput.value.split("/")[1] ||
          displayInput.value.split("x")[1] ||
          displayInput.value.split("+")[1] ||
          displayInput.value.split("-")[1];
      }
    }
  });
});
