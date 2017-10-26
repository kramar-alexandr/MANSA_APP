// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class DefaultItemsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Товары по умолчанию',
            width    : 300,
            height   : 100
        });
        this.datadef = 'DefaultItems';
        this.fields  = ['fCode','fComment'];
    }
};
