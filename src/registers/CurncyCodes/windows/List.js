// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class CurncyCodesListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Валюта',
      width: 420,
      height: 300
    });

    this.datadef = 'CurncyCodes';
    this.fields = ['fCurncyCode', 'fComment'];
  }
};
