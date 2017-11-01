// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

const windowWidth = 450;
const windowHeight = 200;
module.exports = class AlternativeItemsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Товары-заменители',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'AlternativeItems';
    }

    async render() {
      let col1 = 110;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Основной товар',field:'fItemCode',width:120}),col1,ind);
      this.add( new Input({text:'Наименование',field:'fItemName',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Товар-заменитель',field:'fAltItemCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Наименование',field:'fAltItemName',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Клиент',field:'fCustCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Имя',field:'fCustName',width:300}),col1,ind+=ls);
      
    }
};
