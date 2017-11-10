// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ExchangeRatesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Курсы обмена',
            width    : 400,
            height   : 150
        });
        this.datadef = 'ExchangeRates';
        this.fields  = ['fCurncyCode','fDate','fFrRate','fToRate1','fToRate2'];
    }
};
