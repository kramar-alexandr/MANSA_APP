// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');

const windowWidth = 420;
const windowHeight = 300;
module.exports = class InstallmentsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Взносы',
            width    : windowWidth,
            height   : windowHeight
        });

        this.datadef = 'Installments';
    }

    async render() {
      let col0 = 15;
      let col1 = 100;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Комментарий',field:'fComment',width:260}),col1,ind+=ls);
      
      
      this.add(new Matrix({
        field: 'InstallmentsMatrix',
        width: windowWidth-40,
        height: windowHeight-100
      }), col0, ind+=ls*2);
    }
};
