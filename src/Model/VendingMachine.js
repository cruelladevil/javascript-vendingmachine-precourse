const { Random } = require('@woowacourse/mission-utils');
const VendingMachineItem = require('./VendingMachineItem');

class VendingMachine {
  #coinMap;
  #money;
  #items;

  constructor() {
    this.#coinMap = new Map([
      [500, 0],
      [100, 0],
      [50, 0],
      [10, 0],
    ]);
    this.#money = 0;
  }

  initCoins(vendingMachineMoney) {
    this.insertMoney(vendingMachineMoney);
    this.pickRandomCoins();
  }

  insertMoney(money) {
    this.#validateMoney(money);
    this.#money += money;
  }

  #validateMoney(money) {
    if (!Number.isInteger(money)) {
      throw new Error('투입 금액은 정수여야 합니다.');
    }

    if (money % 10 !== 0) {
      throw new Error('자판기는 10원 단위로 투입해야 합니다.');
    }

    if (money < 100) {
      throw new Error('자판기는 최소 100원 이상 투입해야 합니다.');
    }
  }

  pickRandomCoins() {
    while (this.#money > 0) {
      const coin = Random.pickNumberInList([500, 100, 50, 10]);

      if (this.#money - coin >= 0) {
        this.#money -= coin;
        this.#coinMap.set(coin, this.#coinMap.get(coin) + 1);
      }
    }
  }

  getCoinMap() {
    return this.#coinMap;
  }

  initItems(items) {
    this.#items = items.map(
      ([name, price, amount]) => new VendingMachineItem(name, price, amount),
    );
  }

  hasAmountSomeItem() {
    return this.#items.some((item) => item.hasAmount());
  }

  canBuySomeItem() {
    return this.#items.some((item) => this.#money > item.getPrice());
  }

  pickItem(itemName) {
    const item = this.#items.find((item) => itemName === item.getName());

    this.#money -= item.getPrice();
    item.chosen();
  }

  getMoney() {
    return this.#money;
  }

  returnChange() {
    const changeCoinMap = new Map();

    this.#coinMap.forEach((count, coin) => {
      const maxCount = Math.floor(this.#money / coin);
      const changeCount = maxCount > count ? count : maxCount;

      this.#coinMap.set(coin, this.#coinMap.get(coin) - changeCount);
      this.#money -= coin * changeCount;

      changeCoinMap.set(coin, changeCount);
    });

    return changeCoinMap;
  }
}

module.exports = VendingMachine;
