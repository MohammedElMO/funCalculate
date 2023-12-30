export default class Calculator {
  #secondOprand;
  #entryOprand;
  static oprands = ["×", "-", "+", "/", "=", "%"];
  constructor(entryOprand, secondOprand, operation) {
    this.#entryOprand = entryOprand;
    this.#secondOprand = secondOprand;
    this.operation = operation;
  }

  setOperationSign(sign) {
    this.operation = sign;
  }
  setEntryOprand(entryOprand) {
    this.#entryOprand = entryOprand;
  }
  setSecondOprand(secondOprand) {
    this.#secondOprand = secondOprand;
  }

  #parser(oprand) {
    return parseFloat(oprand);
  }
  #removeShitedZero(typedValue) {
    const sequenceNumber = typedValue.split("");
    sequenceNumber.shift();
    return sequenceNumber.join("");
  }
  #oprandFinder(oprand) {
    return Calculator.oprands.find((op) => op === oprand);
  }
  setOprand(shower, value) {
    const typedValue = shower.value;
    if (typedValue.startsWith("0")) {
      shower.value = this.#removeShitedZero(typedValue);
    }
    if (this.#oprandFinder(value)) shower.value = "";

    shower.value += value;
  }
  stateToggeler(element, state) {
    element.disabled = state;
  }

  calculateOperation() {
        




  }
}
