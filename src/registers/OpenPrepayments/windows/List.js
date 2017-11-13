// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class OpenPrepaymentsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Открытые предоплаты',
            width    : 450,
            height   : 200
        });
        this.datadef = 'OpenPrepayments';
        this.fields  = ['fCUPNr','fRVal','fPayDate','fCustCode'];
    }
};
