const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

const InputView = {
  VENDING_MACHINE_MONEY: '자판기가 보유하고 있는 금액을 입력해 주세요.\n',
  VENDING_MACHINE_ITEMS: '상품명과 가격, 수량을 입력해 주세요.\n',
  USER_MONEY: '\n투입 금액을 입력해 주세요.\n',
  ITEM_NAME_TO_BUY: '구매할 상품명을 입력해 주세요.\n',

  readVendingMachineMoney(callback) {
    InputView.question(InputView.VENDING_MACHINE_MONEY, callback);
  },

  readVendingMachineItems(callback) {
    InputView.question(InputView.VENDING_MACHINE_ITEMS, callback);
  },

  readUserMoney(callback) {
    InputView.question(InputView.USER_MONEY, callback);
  },

  readItemNameTobuy(callback) {
    InputView.question(InputView.ITEM_NAME_TO_BUY, callback);
  },

  question(string, callback) {
    Console.readLine(string, (input) => {
      try {
        callback(input);
      } catch (error) {
        OutputView.printError(error);
        InputView.question(string, callback);
      }
    });
  },
};

module.exports = InputView;
