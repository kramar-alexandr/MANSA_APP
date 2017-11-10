// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class OpenInvoicesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Открытые счета-фактуры',
            width    : 350,
            height   : 150
        });
        this.datadef = 'OpenInvoices';
        this.fields  = ['fInvoiceNr','fRVal','fDueDate','fCustCode'];
    }
};
