const { Random } = require('@woowacourse/mission-utils');

class VendingMachine {
  #coinMap;
  #money;

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
    this.#money += vendingMachineMoney;
    this.pickRandomCoins(vendingMachineMoney);
  }

  pickRandomCoins(vendingMachineMoney) {
    let money = vendingMachineMoney;

    while (money > 0) {
      const coin = Random.pickNumberInList([500, 100, 50, 10]);

      if (money - coin >= 0) {
        money -= coin;
        this.#coinMap.set(coin, this.#coinMap.get(coin) + 1);
      }
    }
  }

  getCoinMap() {
    return this.#coinMap;
  }
}

module.exports = VendingMachine;
