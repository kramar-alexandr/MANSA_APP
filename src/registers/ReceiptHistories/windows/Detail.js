// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

module.exports = class ReceiptHistoriesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'История платежей клиента',
            width    : 300,
            height   : 320
        });
        this.datadef = 'ReceiptHistories';
    }

    async render() {
      
      let col1 = 120;
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'TransNr',field:'fTransNr',width:120}),col1,ind);
      this.add( new Input({text:'IVNr',field:'fIVNr',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CustDate',field:'fCustDate',width:120}),col1,ind+=ls);
      this.add( new Input({text:'TransType',field:'fTransType',width:120}),col1,ind+=ls);
      this.add( new Input({text:'TransDate',field:'fTransDate',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CustCode',field:'fCustCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'AccNr',field:'fAccNr',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CheckType',field:'fCheckType',width:120}),col1,ind+=ls);
      this.add( new Input({text:'ChequeNr',field:'fChequeNr',width:120}),col1,ind+=ls);
      this.add( new Input({text:'IntYc',field:'fIntYc',width:120}),col1,ind+=ls);
      this.add( new Input({text:'TransRow',field:'fTransRow',width:120}),col1,ind+=ls);
      this.add( new Input({text:'InstNr',field:'fInstNr',width:120}),col1,ind+=ls);
      
    }
};
