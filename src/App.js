const VendingMachineController = require('./Controller/VendingMachineController');

class App {
  play() {
    const vendingMachineController = new VendingMachineController();

    vendingMachineController.run();
  }
}

module.exports = App;
