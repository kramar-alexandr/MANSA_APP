// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

module.exports = class OpenInvoicesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Открытая счет-фактура',
            width    : 350,
            height   : 200
        });
        this.datadef = 'OpenInvoices';
    }

    async render() {
      let col1 = 120;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'№ сч/ф',field:'fInvoiceNr', width:120}),col1,ind);
      this.add( new Input({text:'Дата опл.',field:'fDueDate', width:120}),col1,ind+=ls);
      this.add( new Input({text:'Оф.номер',field:'fOfficialSerNr', width:120}),col1,ind+=ls);
      this.add( new Input({text:'Клиент',field:'fCustCode', width:120}),col1,ind+=ls);
      this.add( new Input({text:'Наименование',field:'fCustName', width:120}),col1,ind+=ls);
      this.add( new Input({text:'Сумма',field:'fRVal', width:120}),col1,ind+=ls);
      
    }
};
