const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

const InputView = {
  VENDING_MACHINE_MONEY: '자판기가 보유하고 있는 금액을 입력해 주세요.\n',
  VENDING_MACHINE_ITEMS: '상품명과 가격, 수량을 입력해 주세요.\n',
  USER_MONEY: '\n투입 금액을 입력해 주세요.\n',
  ITEM_NAME_TO_BUY: '구매할 상품명을 입력해 주세요.\n',

  readVendingMachineMoney(callback) {
    InputView.question(InputView.VENDING_MACHINE_MONEY, (input) => {
      const vendingMachineMoney = Number(input);

      InputView.validateMoney(vendingMachineMoney);
      callback(vendingMachineMoney);
    });
  },

  readVendingMachineItems(callback) {
    InputView.question(InputView.VENDING_MACHINE_ITEMS, (input) => {
      const items = InputView.convertInputToItems(input);

      InputView.validateItems(items);
      callback(items);
    });
  },

  readUserMoney(callback) {
    InputView.question(InputView.USER_MONEY, (input) => {
      const userMoney = Number(input);

      InputView.validateMoney(userMoney);
      callback(userMoney);
    });
  },

  readItemNameTobuy(callback) {
    InputView.question(InputView.ITEM_NAME_TO_BUY, (input) => {
      const itemName = input;

      callback(itemName);
    });
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

  validateMoney(money) {
    if (!Number.isInteger(money)) {
      throw new Error('금액은 숫자여야 합니다.');
    }
  },

  convertInputToItems(input) {
    return input.split(';').map((item) => {
      const [name, price, amount] = item.slice(1, -1).split(',');
      return [name, Number(price), Number(amount)];
    });
  },

  validateItems(items) {
    if (items.length === 0) {
      throw new Error('상품을 최소 1개 이상 입력해주세요.');
    }

    items.some(([name, price, amount]) => {
      if (name.length === 0) {
        throw new Error('상품의 이름은 1글자 이상이어야 합니다.');
      }
      if (!Number.isInteger(price)) {
        throw new Error('상품의 가격은 숫자여야 합니다.');
      }
      if (!Number.isInteger(amount) || amount < 0) {
        throw new Error('상품의 수량은 최소 0 이상의 숫자여야 합니다.');
      }
    });
  },

  close() {
    Console.close();
  },
};

module.exports = InputView;
