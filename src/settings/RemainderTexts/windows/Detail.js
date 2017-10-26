// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

const windowWidth = 450;
const windowHeight = 300;
module.exports = class RemainderTextsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Текст напоминаний',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'RemainderTexts';
    }

    async render() {
      let col1 = 110;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Язык',field:'fLangCode',width:120}),col1,ind);
      this.add( new Input({text:'Комментарий',field:'fComment',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Напоминание 1',field:'ftxts0',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts1',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts2',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Напоминание 2',field:'ftxts3',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts4',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts5',width:300}),col1,ind+=ls);
      this.add( new Input({text:'Напоминание 3',field:'ftxts6',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts7',width:300}),col1,ind+=ls);
      this.add( new Input({text:'',field:'ftxts8',width:300}),col1,ind+=ls);
      
    }
};
