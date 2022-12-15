const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  VENDING_MACHINE_MONEY: '자판기가 보유하고 있는 금액을 입력해 주세요.\n',

  readVendingMachineMoney(callback) {
    Console.readLine(InputView.VENDING_MACHINE_MONEY, callback);
  },
};

module.exports = InputView;
