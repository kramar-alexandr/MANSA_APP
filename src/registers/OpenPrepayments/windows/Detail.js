// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

module.exports = class OpenPrepaymentsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Открытая предоплата',
            width    : 300,
            height   : 360
        });
        this.datadef = 'OpenPrepayments';
    }

    async render() {
      
      let col1 = 120;
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'CUPNr',field:'fCUPNr',width:120}),col1,ind);
      this.add( new Input({text:'RVal',field:'fRVal',width:120}),col1,ind+=ls);
      this.add( new Input({text:'PayDate',field:'fPayDate',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CustCode',field:'fCustCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CurncyCode',field:'fCurncyCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'CustName',field:'fCustName',width:120}),col1,ind+=ls);
      this.add( new Input({text:'BookRVal',field:'fBookRVal',width:120}),col1,ind+=ls);
      this.add( new Input({text:'IPNr',field:'fIPNr',width:120}),col1,ind+=ls);
      this.add( new Input({text:'VATVal',field:'fVATVal',width:120}),col1,ind+=ls);
      this.add( new Input({text:'VATCode',field:'fVATCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'VATBookVal',field:'fVATBookVal',width:120}),col1,ind+=ls);
      this.add( new Input({text:'BankCurncy',field:'fBankCurncy',width:120}),col1,ind+=ls);
      this.add( new Input({text:'OrderNr',field:'fOrderNr',width:120}),col1,ind+=ls);
      this.add( new Input({text:'TAX1Sum',field:'fTAX1Sum',width:120}),col1,ind+=ls);
      this.add( new Input({text:'TAX1SumBook',field:'fTAX1SumBook',width:120}),col1,ind+=ls);

    }
};
