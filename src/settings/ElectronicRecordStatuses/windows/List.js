// @flow
const Register = require('erpjs/core/client/Register');

const RegisterListWindow = require('erpjs/core/client/windows/RegisterListWindow');

module.exports = class ElectronicRecordStatusesListWindow extends RegisterListWindow {
    constructor(args:{register: Register}):void {
        super({
            register : args.register,
            title    : 'Статусы электронных записей',
            width    : 300,
            height   : 100
        });
        this.datadef = 'ElectronicRecordStatuses';
        this.fields  = ['fFileNameDesc','fCustSerNr','fCustRecRowNr','fCreationDate','fCreationTime','fStatus','fSent','fTheirRecipient','fCustID','fSerNr','fComment'];
    }
};
