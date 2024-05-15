const displayInput = document.querySelector("#input");
const buttons = document.querySelectorAll(".optns button");

let display = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.innerHTML === "AC") {
      display = "";
      displayInput.value = display;
    } else if (button.innerHTML === "DEL") {
      const displayValue = displayInput.value;
      display = displayValue.slice(0, -1);
      displayInput.value = display;
    } else if (button.innerHTML === "/") {
      const divide = displayInput.value.split("/");
      let total = divide[0];
      for (let i = 1; i < divide.length; i++) {
        const num = parseFloat(divide[i]);
        total /= num;
      }
      display = total;
      displayInput.value = display;
    } else if (button.innerHTML === "x") {
      const multiply = displayInput.value.split("x");
      let total = multiply[0];
      for (let i = 1; i < multiply.length; i++) {
        const num = parseFloat(multiply[i]);
        total *= num;
      }
      display = total;
      displayInput.value = display;
    } else if (button.innerHTML === "+") {
      const plus = displayInput.value.split("+");
      let total = 0;
      plus.forEach((kartik) => {
        const num = parseFloat(kartik);
        total += num;
      });
      display = total;
      displayInput.value = display;
    } else if (button.innerHTML === "-") {
      const minus = displayInput.value.split("-");
      let total = minus[0];
      for (let i = 1; i < minus.length; i++) {
        const num = parseFloat(minus[i]);
        total -= num;
      }
      display = total;
      displayInput.value = display;
    } else {
      display += button.innerText;
      displayInput.value = display;
    }
  });
});
``