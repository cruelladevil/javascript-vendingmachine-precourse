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
    InputView.readVendingMachineMoney((vendingMachineMoney) => {
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
    InputView.readVendingMachineItems((items) => {
      this.#vendingMachine.initItems(items);

      this.#readUserMoney();
    });
  }

  #readUserMoney() {
    InputView.readUserMoney((userMoney) => {
      this.#vendingMachine.insertMoney(userMoney);

      this.#readItemNametoBuy();
    });
  }

  #readItemNametoBuy() {
    OutputView.printVendingMachineMoney(this.#vendingMachine.getMoney());
    InputView.readItemNameTobuy((itemName) => {
      this.#vendingMachine.pickItem(itemName);

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
