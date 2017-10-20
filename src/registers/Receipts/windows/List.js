// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class ReceiptsListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Платежы',
      width: 420,
      height: 300
    });

    this.datadef = 'Receipts';
    this.fields = ['fSerNr', 'fOfficialSerNr','fOKMark','fTransDate','fRecNumber','fComment','fCurPayVal','fPayCurCode'];
  }
};
