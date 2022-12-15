const VendingMachine = require('../Model/VendingMachine');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

class VendingMachineController {
  #vendingMachine;

  constructor() {
    this.#vendingMachine = new VendingMachine();
  }

  run() {
    this.readVendingMachineMoney();
  }

  readVendingMachineMoney() {
    InputView.readVendingMachineMoney((input) => {
      const vendingMachineMoney = Number(input);
      this.initVendingMachineCoins(vendingMachineMoney);
      this.printCoinMap();
    });
  }

  initVendingMachineCoins(vendingMachineMoney) {
    this.#vendingMachine.initCoins(vendingMachineMoney);
  }

  printCoinMap() {
    const coinMap = this.#vendingMachine.getCoinMap();
    OutputView.printVendingMachineCoins(coinMap);
  }
}

module.exports = VendingMachineController;
