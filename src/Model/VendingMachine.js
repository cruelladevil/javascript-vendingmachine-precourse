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
    this.#money += money;
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
}

module.exports = VendingMachine;
