// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

const windowWidth = 450;
const windowHeight = 200;
module.exports = class StandardProblemsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Стандартная проблема',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'StandardProblems';
    }

    async render() {
      let col1 = 110;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Кратк.опис',field:'fShortDesc',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment1',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'fComment2',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'fComment3',width:300}),col1,ind+=ls);
      
    }
};
