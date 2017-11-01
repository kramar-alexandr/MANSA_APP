// @flow
const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class StandardProblemsListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Стандартные проблемы',
            width    : 300,
            height   : 100
        });
        this.datadef = 'StandardProblems';
        this.fields  = ['fCode','fShortDesc'];
    }
};
