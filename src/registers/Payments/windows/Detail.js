// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

module.exports = class PaymentsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Платеж клиента',
            width    : 600,
            height   : 450
        });
        this.datadef = 'Payments';
    }

    async render() {
      let col1 = 120;
      let col2 = 300;
      let col3 = 450;
      let col4 = 550;
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'Сер.номер',field:'fSerNr'}),col1,ind);
      this.add( new Input({text:'Способ оплаты',field:'fPayMode'}),col1,ind+=ls);
      this.add( new Input({text:'Код авториз.',field:'fAuthorizationCode'}),col1,ind+=ls);
      
      this.add( new Input({text:'Дата опер.',field:'fTransDate'}),col2,ind=10);
      this.add( new Input({text:'Комментарий',field:'fComment',width:260 }),col2,ind+=ls);
      
      this.add( new Input({text:'Ссылка',field:'fRecNumber'}),col3,ind=10);
      this.add(new Checkbox({text:'Инф.о клиенте в записи',field:'fARonTR',value:1}),col3,ind+=ls*2);
      
      this.add(new Checkbox({text:'ОК',field:'fOKFlag',value:1}),col4,ind);
      
      const payMatrix = new Matrix({
        field: 'PaymentsMatrix',
        width: this.width-20,
        height: this.height-120
      });
      this.add(payMatrix,10,ind=ls*4);
    }
};
