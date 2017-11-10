// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

module.exports = class BaseCurrencyDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Основная валюта',
            width    : 300,
            height   : 200
        });
        this.datadef = 'BaseCurrency';
        this.isSetting = true;
    }

    async render() {
      
      let col1 = this.width/2;
      let col2 = col1+100;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Осн.валюта 1',field:'fBaseCur1',width:120}),col1,ind);
      this.add( new Input({text:'Осн.валюта 2',field:'fBaseCur2',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Осн.валюта по умолч.',field:'fStdBaseCur',width:120}),col1,ind+=ls);
      this.add( new BlockLabel({text:'Контроль ввода'}),col1-50,ind+=ls*2);
      this.add(new Checkbox({text:'Не разрешать ввод курса осн.валюты 1',field:'fNotBase1',value:1}),col2,ind+=ls);
      this.add(new Checkbox({text:'Не разрешать ввод курса осн.валюты 2',field:'fNotBase2',value:1}),col2,ind+=ls);
      
    }
};
