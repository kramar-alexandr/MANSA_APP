// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

const windowWidth = 450;
const windowHeight = 200;
module.exports = class ExtraTaxCustomerDiscountsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Скидки клиентам с доп. налога',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'ExtraTaxCustomerDiscounts';
    }

    async render() {
      let col1 = 80;
      let col2 = 300;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'НДС',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Клиент',field:'fCustCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'От',field:'fFrom',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment',width:120}),col2,ind=10);
      this.add( new Input({text:'Наименование',field:'fName',width:120}),col2,ind+=ls);
      this.add( new Input({text:'Скидка %',field:'fTAX1Reb',width:120}),col2,ind+=ls);
      
    }
};
