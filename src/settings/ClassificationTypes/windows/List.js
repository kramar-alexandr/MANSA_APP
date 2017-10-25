// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ClassificationTypesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Виды классификации',
            width    : 300,
            height   : 100
        });
        this.datadef = 'ClassificationTypes';
        this.fields  = ['fCode','fComment'];
    }
};
