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
      title: 'Група товаров',
      width: 420,
      height: 300
    });

    this.datadef = 'ItemGroup';
    this.fields = ['fCode', 'fComment'];
  }
};
