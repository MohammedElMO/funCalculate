import { outputViewer, numbers, operation_signs } from "./constants.js";
import Calculator from "./app.js";

const calculator = new Calculator();

// tracing each button and displaying its correspondig number

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    console.log();
    calculator.setOprand(outputViewer, e.target.textContent);
  });
});

operation_signs.forEach((ops) => {
  ops.addEventListener("click", (e) => {
    calculator.setOperationSign(e.target.textContent);
  });
});
