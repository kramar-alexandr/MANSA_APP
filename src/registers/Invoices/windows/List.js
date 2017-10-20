// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class InvoicesListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Счета фактуры',
      width: 500,
      height: 300
    });

    this.datadef = 'Invoices';
    this.fields = ['fSerNr','fOKFlag','fOrderNr','fCustCode','fName','fCurncyCode'];
  }
};
