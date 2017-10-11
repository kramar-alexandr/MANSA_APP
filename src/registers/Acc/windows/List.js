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
      title: 'План счетов',
      width: 420,
      height: 300
    });

    this.datadef = 'Acc';
    this.fields = ['acc_number', 'comment'];
  }
};
