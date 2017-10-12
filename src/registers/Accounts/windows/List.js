// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class AccListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Cчета',
      width: 420,
      height: 300
    });

    this.datadef = 'Accounts';
    this.fields = ['fAccNumber', 'fComment'];
  }
};
