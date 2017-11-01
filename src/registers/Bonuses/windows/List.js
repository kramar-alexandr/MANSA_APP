// @flow

const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class BonusesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Премии',
            width    : 300,
            height   : 100
        });
        this.datadef = 'Bonuses';
        this.fields  = ['fUserCode','fUserName','fCustCode','fCustCat'];
    }
};
