// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');

const windowWidth = 420;
const windowHeight = 400;
module.exports = class BonusesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Премия',
            width    : windowWidth,
            height   : windowHeight
        });

        this.datadef = 'Bonuses';
    }

    async render() {
      let col0 = 15;
      let col1 = 80;
      let col2 = 220;
      let col3 = 340;
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'Сотрудник',field:'fUserCode'}),col1,ind);
      this.add( new Input({text:'Клиент',field:'fCustCode'}),col1,ind+=ls);
      
      this.add( new Input({text:'ФИО',field:'fUserName',width:180}),col2,ind=10);
      this.add( new Input({text:'Категория',field:'fCustCat'}),col2,ind+=ls);
      
      this.add( new Input({text:'% прем.',field:'fBonusPrc'}),col3,ind);
      
      this.add(new Matrix({
        field: 'BonusesMatrix',
        width: windowWidth-40,
        height: windowHeight-100
      }), col0, ind+=ls*2);
    }
};
