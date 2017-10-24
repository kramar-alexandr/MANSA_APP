// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class InternalInvoicesListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Внутренние счета-фактуры',
      width: 500,
      height: 300
    });

    this.datadef = 'InternalInvoices';
    this.fields = ['fSerNr','fOKFlag','fTransDate','fSalesMan','fName','fSum4'];
  }
};
