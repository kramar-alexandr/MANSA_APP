// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ReceiptHistoriesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Истории платежей клиента',
            width    : 450,
            height   : 200
        });
        this.datadef = 'ReceiptHistories';
        this.fields  = ['fCustCode','fTransNr','fTransDate','fCustDate','fIVNr','fTransType'];
    }
};
