// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require(
  'erpjs/core/client/windows/RegisterListWindow');

module.exports = class ContactsListWindow extends RegisterListWindow {
  constructor(args: {
    register: Register
  }): void {
    super({
      register: args.register,
      title: 'Контакты',
      width: 500,
      height: 300
    });

    this.datadef = 'Contacts';
    this.fields = ['fCode','fSearchKey','fCustCat','fName','fPhone','fPerson','fDepartment','fVATNr','fBankAccount'];
  }
};
