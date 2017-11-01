// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class PaymentTermsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Условия оплаты',
            width    : 300,
            height   : 100
        });
        this.datadef = 'PaymentTerms';
        this.fields  = ['fCode','fPdComment'];
    }
};
