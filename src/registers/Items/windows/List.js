// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class ItemsListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Товары',
      width: 420,
      height: 300
    });

    this.datadef = 'Items';
    this.fields = ['fCode', 'fName'];
  }
};
