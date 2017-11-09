// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class PaymentsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Платежи',
            width    : 450,
            height   : 200
        });
        this.datadef = 'Payments';
        this.fields  = ['fSerNr','fOfficialSerNr','fOKMark','fTransDate','fRecNumber','fComment','fCurPayVal'];
    }
};
