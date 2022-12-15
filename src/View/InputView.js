const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  VENDING_MACHINE_MONEY: '자판기가 보유하고 있는 금액을 입력해 주세요.\n',
  VENDING_MACHINE_ITEMS: '상품명과 가격, 수량을 입력해 주세요.\n',
  USER_MONEY: '\n투입 금액을 입력해 주세요.\n',

  readVendingMachineMoney(callback) {
    Console.readLine(InputView.VENDING_MACHINE_MONEY, callback);
  },

  readVendingMachineItems(callback) {
    Console.readLine(InputView.VENDING_MACHINE_ITEMS, callback);
  },

  readUserMoney(callback) {
    Console.readLine(InputView.USER_MONEY, callback);
  },
};

module.exports = InputView;
