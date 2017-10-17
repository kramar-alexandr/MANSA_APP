// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class CurncyCodeListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Валюта',
      width: 420,
      height: 300
    });

    this.datadef = 'CurncyCode';
    this.fields = ['fCurncyCode', 'fComment'];
  }
};
