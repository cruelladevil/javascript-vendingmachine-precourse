class VendingMachineItem {
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#name = name;
    this.#price = price;
    this.#amount = amount;
  }

  hasAmount() {
    return this.#amount > 0;
  }

  getPrice() {
    return this.#price;
  }

  getName() {
    return this.#name;
  }

  chosen() {
    this.#amount -= 1;
  }
}

module.exports = VendingMachineItem;
