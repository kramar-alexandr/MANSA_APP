// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');

const windowWidth = 420;
const windowHeight = 200;
module.exports = class IssuedGiftVouchersDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Выпущенные подарочные сертификаты',
            width    : windowWidth,
            height   : windowHeight
        });

        this.datadef = 'IssuedGiftVouchers';
    }

    async render() {
      let col0 = 15;
      let col1 = 100;
      let col2 = 280;
      let col3 = 380;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Номер',field:'fSerNr'}),col1,ind);
      this.add( new Input({text:'Дата опер.',field:'fTransDate'}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment',width:240}),col1,ind+=ls);
      this.add( new Input({text:'Штрих-код',field:'fBarCode'}),col1,ind+=ls);
      ind = 10;
      this.add( new Input({text:'Сумма',field:'fAmount'}),col2,ind);
      this.add( new Input({text:'Действ.до',field:'fExpiryDate'}),col2,ind+=ls);
      this.add( new Input({text:'Тип',field:'fType'}),col2,ind+=ls*2);
      ind = 10;
      this.add(new Checkbox({text:'OK',field:'fOKFlag',value:1}),col3,ind);
      
      
    }
};
