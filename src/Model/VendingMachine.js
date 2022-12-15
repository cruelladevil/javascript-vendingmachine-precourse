const { Random } = require('@woowacourse/mission-utils');

class VendingMachine {
  #coinMap = { 500: 0, 100: 0, 50: 0, 10: 0 };
  #money = 0;

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
        this.#coinMap[coin] += 1;
      }
    }
  }
}

module.exports = VendingMachine;
