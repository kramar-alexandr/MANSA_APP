// @flow
const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class AlternativeItemsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Товары-заменители',
            width    : 300,
            height   : 100
        });
        this.datadef = 'AlternativeItems';
        this.fields  = ['fItemCode','fItemName','fAltItemCode','fAltItemName'];
    }
};
