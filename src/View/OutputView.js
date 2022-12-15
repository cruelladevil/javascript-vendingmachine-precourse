const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  COIN_VIEW_PREFIX: '\n자판기가 보유한 동전',
  CHAGNE_VIEW_PREFIX: '잔돈',

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

  printChangeCoins(changeCoinMap) {
    const changeCoinView = OutputView.buildCoinView(changeCoinMap);

    Console.print(OutputView.CHAGNE_VIEW_PREFIX);
    Console.print(changeCoinView);
    Console.close();
  },

  printError(error) {
    Console.print(`[ERROR]: ${error.message}`);
  },
};

module.exports = OutputView;
