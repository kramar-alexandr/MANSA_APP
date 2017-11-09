// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class PricesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Цены',
            width    : 400,
            height   : 150
        });
        this.datadef = 'Prices';
        this.fields  = ['fArtCode','fPLCode','fCustCode','fComment','fExVatPrice'];
    }
};
