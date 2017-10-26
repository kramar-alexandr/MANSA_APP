// @flow
const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class RemainderTextsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Тексты напоминаний',
            width    : 300,
            height   : 100
        });
        this.datadef = 'RemainderTexts';
        this.fields  = ['fLangCode','fComment'];
    }
};
