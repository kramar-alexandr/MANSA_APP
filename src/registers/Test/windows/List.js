// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class TestListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Test',
      width: 420,
      height: 300
    });

    this.datadef = 'Test';
    this.fields = ['name', 'phone'];
  }
};
