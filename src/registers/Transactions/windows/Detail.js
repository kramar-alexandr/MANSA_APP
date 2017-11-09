// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

module.exports = class TransactionsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Запись операции',
            width    : 600,
            height   : 400
        });
        this.datadef = 'Transactions';
    }

    async render() {
      
      let col1 = 100;
      let col2 = 210;
      let col3 = 350;
      let col4 = 420;
      let col5 = 500;
      let ls = 20;
      let ind = 10;
      let ft = this.height-80;
      this.add( new Input({text:'Номер',field:'fNumber'}),col1,ind);
      this.add( new Input({text:'Комм.',field:'fComment',width:450}),col1,ind+=ls);
      this.add( new Input({text:'Дата',field:'fTransDate'}),col2,ind=10);
      this.add( new Input({text:'Ссылка',field:'fRefStr',width:200}),col3,ind);
      const transMatrix = new Matrix({
        field: 'PaymentsMatrix',
        width: this.width-20,
        height: 260
      });
      this.add(transMatrix,10,ind=ls*3);
      this.add( new Input({text:'Разница баз.1',field:'fDiffVal'}),col1,ind=ft);
      this.add( new Input({text:'Разница баз.2',field:'fDiff2Val'}),col1,ind+=ls);
      this.add( new Input({text:'Итого',field:'fDSum'}),col4,ind=ft);
      this.add( new Input({text:'Всего',field:'fDSum2'}),col4,ind+=ls);
      this.add( new Input({text:'',field:'fCSum'}),col5,ind=ft);
      this.add( new Input({text:'.',field:'fCSum2'}),col5,ind+=ls);
      
    }
};
