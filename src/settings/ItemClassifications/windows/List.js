// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ItemClassificationsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Классификации товаров',
            width    : 300,
            height   : 100
        });
        this.datadef = 'ItemClassifications';
        this.fields  = ['fCode','fCType','fName'];
    }
};
