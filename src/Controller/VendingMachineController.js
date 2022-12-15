const VendingMachine = require('../Model/VendingMachine');
const InputView = require('../View/InputView');

class VendingMachineController {
  #vendingMachine;

  constructor() {
    this.#vendingMachine = new VendingMachine();
  }

  run() {
    this.readVendingMachineMoney();
  }

  readVendingMachineMoney() {
    InputView.readVendingMachineMoney((input) => {});
  }
}

module.exports = VendingMachineController;
