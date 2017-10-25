// @flow

const Register = require('erpjs/core/client/Register');
// const { l }    = require('erpjs/core/client/i18n');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ElectronicInvoicesQueuesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Очередь электронных счёт-фактур',
            width    : 300,
            height   : 100
        });
        this.datadef = 'ElectronicInvoicesQueues';
        this.fields  = ['fFileNameDesc','fRecSerNr','fCreationDate','fStatus','fRecVersionNr','fComment'];
    }
};
