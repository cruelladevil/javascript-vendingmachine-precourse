class VendingMachineItem {
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#name = name;
    this.#price = price;
    this.#amount = amount;
  }
}

module.exports = VendingMachineItem;
