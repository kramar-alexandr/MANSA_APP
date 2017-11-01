// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class InstallmentsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Взносы',
            width    : 300,
            height   : 100
        });
        this.datadef = 'Installments';
        this.fields  = ['fCode','fComment'];
    }
};
