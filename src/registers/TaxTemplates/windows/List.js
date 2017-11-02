// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class TaxTemplatesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Шаблоны расчета налога',
            width    : 300,
            height   : 100
        });
        this.datadef = 'TaxTemplates';
        this.fields  = ['fCode','fComment','fTaxID'];
    }
};
