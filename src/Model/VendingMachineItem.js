class VendingMachineItem {
  #name;
  #price;
  #amount;

  constructor(name, price, amount) {
    this.#validatePrice(price);
    this.#validateAmount(amount);

    this.#name = name;
    this.#price = price;
    this.#amount = amount;
  }

  #validatePrice(price) {
    if (!Number.isInteger(price)) {
      throw new Error('상품 가격은 정수여야 합니다.');
    }
    if (price % 10 !== 0) {
      throw new Error('상품 가격은 10원 단위여야 합니다.');
    }
    if (price < 100) {
      throw new Error('상품 가격은 최소 100원 이상 이어야 합니다.');
    }
  }

  #validateAmount(amount) {
    if (!Number.isInteger(amount)) {
      throw new Error('상품 수량은 정수여야 합니다,');
    }
    if (amount < 1) {
      throw new Error('상품 수량은 최소 1개 이상 이어야 합니다.');
    }
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
