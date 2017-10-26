// @flow
const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class CrossSalesItemsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Сопутствующие товары',
            width    : 300,
            height   : 100
        });
        this.datadef = 'CrossSalesItems';
        this.fields  = ['fItemCode','fItemName','fCrossItemCode','fCrossItemName'];
    }
};
