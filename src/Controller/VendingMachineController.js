const VendingMachine = require('../Model/VendingMachine');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

class VendingMachineController {
  #vendingMachine;

  constructor() {
    this.#vendingMachine = new VendingMachine();
  }

  run() {
    this.#readVendingMachineMoney();
  }

  #readVendingMachineMoney() {
    InputView.readVendingMachineMoney((input) => {
      const vendingMachineMoney = Number(input);
      this.#initVendingMachineCoins(vendingMachineMoney);
      this.#printCoinMap();

      this.#readVendingMachineItems();
    });
  }

  #initVendingMachineCoins(vendingMachineMoney) {
    this.#vendingMachine.initCoins(vendingMachineMoney);
  }

  #printCoinMap() {
    const coinMap = this.#vendingMachine.getCoinMap();
    OutputView.printVendingMachineCoins(coinMap);
  }

  #readVendingMachineItems() {
    InputView.readVendingMachineItems((input) => {
      const items = this.#convertInputToItems(input);
      this.#vendingMachine.initItems(items);

      this.#readUserMoney();
    });
  }

  #convertInputToItems(input) {
    return input.split(';').map((item) => {
      const [name, price, amount] = item.slice(1, -1).split(',');
      return [name, Number(price), Number(amount)];
    });
  }

  #readUserMoney() {
    InputView.readUserMoney((input) => {
      const userMoney = Number(input);
      this.#vendingMachine.insertMoney(userMoney);

      this.#readItemNametoBuy();
    });
  }

  #readItemNametoBuy() {
    OutputView.printVendingMachineMoney(this.#vendingMachine.getMoney());
    InputView.readItemNameTobuy((input) => {
      this.#vendingMachine.pickItem(input);

      if (
        this.#vendingMachine.hasAmountSomeItem() &&
        this.#vendingMachine.canBuySomeItem()
      ) {
        this.#readItemNametoBuy();
      } else {
        this.#returnChange();
      }
    });
  }

  #returnChange() {
    OutputView.printVendingMachineMoney(this.#vendingMachine.getMoney());

    const changeCoinMap = this.#vendingMachine.returnChange();

    OutputView.printChangeCoins(changeCoinMap);

    this.#end();
  }

  #end() {
    InputView.close();
  }
}

module.exports = VendingMachineController;
