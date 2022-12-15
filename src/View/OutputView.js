const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  COIN_VIEW_PREFIX: '\n자판기가 보유한 동전',

  printVendingMachineCoins(coinMap) {
    const coinView = OutputView.buildCoinView(coinMap);

    Console.print(OutputView.COIN_VIEW_PREFIX);
    Console.print(coinView);
  },

  printVendingMachineMoney(vendingMachineMoney) {
    const moneyView = OutputView.buildMoneyView(vendingMachineMoney);

    Console.print(moneyView);
  },

  buildMoneyView(money) {
    return `\n투입 금액: ${money}원`;
  },

  buildCoinView(coinMap) {
    let coinView = '';

    coinMap.forEach((count, coin) => {
      coinView += `${coin}원 - ${count}개` + '\n';
    });

    return coinView;
  },
};

module.exports = OutputView;
