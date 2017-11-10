// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class PriceListsListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Прейскуранты',
      width: 420,
      height: 300
    });

    this.datadef = 'PriceLists';
    this.fields = ['fCode', 'fComment'];
  }
};
