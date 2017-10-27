// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

const windowWidth = 420;
const windowHeight = 400;
module.exports = class CreditLimitDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Кредит лимита',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'CreditLimit';
        this.isSetting = true;
    }

    async render() {
      let col1 = 360;
      let col0 = 150;
      let ls = 20;
      let ind = 10;
      
      this.add(new Checkbox({text:'Предупреждение при выборе клиента в счёте клиен.',field:'fORPaste',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Предупреждение при выборе клиента в счёте фактуры',field:'fIVPaste',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Предупреждение при создании отгрузки',field:'fSHPaste',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Запретить сохранение счёта-фактуры',field:'fIVSave',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Запретить сохранения заказа',field:'fORSave',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Запретить создавать отгрузку',field:'fSHSave',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Добавать сумму чека',field:'fOwnCheques',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Добавить 3 суму чека',field:'fThirdCheques',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Добавить IOU суму чека',field:'IOUCheques',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Добавить 3 IOU суму чека',field:'fThirdIOUCheques',value:1}),col1,ind+=ls);
      this.add(new Checkbox({text:'Включить открытие счёта',field:'fORSaveWarn',value:1}),col1,ind+=ls);
      
      this.add( new BlockLabel({text:'Базировать лимит кредита на'}),col0,ind+=ls*2);
      const limRadio1 = new RadioButton({text:'все открытые счета-фактуры',value:1});
      const limRadio2 = new RadioButton({text:'счета только с просрочкой',value:2});
      const limRadio3 = new RadioButton({text:'счета только с просрочкой до даты платежа',value:3});
      const limGroup = new RadioButtonsGroup({
        buttons:[
          limRadio1,
          limRadio2,
          limRadio3
        ],
        field:'fBase'
      });
      this.add(limRadio1,col1,ind+=ls);
      this.add(limRadio2,col1,ind+=ls);
      this.add(limRadio3,col1,ind+=ls);
      this.add(limGroup);
      
    }
};
