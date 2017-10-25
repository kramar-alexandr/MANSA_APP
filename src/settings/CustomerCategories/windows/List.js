// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class CustomerCategoriesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Категории клиентов',
            width    : 300,
            height   : 100
        });
        this.datadef = 'CustomerCategories';
        this.fields  = ['fCode','fComment'];
    }
};
