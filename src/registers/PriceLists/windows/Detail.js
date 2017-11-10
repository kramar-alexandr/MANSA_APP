// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');



module.exports = class PriceListsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);

        this.width   = 550;
        this.height  = 400;
        this.title   = 'Прейскурант';
        this.datadef = 'PriceLists';
        this.resizable = true;
    }

    async render() {
      let col1 = 120;
      let col2 = 250;
      let col2r = 350;
      let col3 = 450;
      let col3r = 500;
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'Код',field:'fCode'}),col1,ind);
      this.add( new Input({text:'Период',field:'fStartDate'}),col1,ind+=ls);
      this.add( new Input({text:'Время',field:'fStartTime'}),col1,ind+=ls);
      this.add( new Input({text:'Заменить',field:'fPLReplCode'}),col1,ind+=ls);
      this.add( new Input({text:'Поставщик ОЗ',field:'fBBVECode'}),col1,ind+=ls);
      this.add( new Input({text:'Счёт начисл.ОЗ',field:'fBBVarAcc'}),col1,ind+=ls);
      
      this.add( new Input({text:'Коммент.',field:'fComment',width:260}),col2,ind=10);
      this.add( new Input({text:'-',field:'fEndDate'}),col2,ind+=ls);
      this.add( new Input({text:'-',field:'fEndTime'}),col2,ind+=ls);
      
      this.add( new BlockLabel({text:'НДС'}),col2r-50,ind+=ls*2);
      const ndsRadio1 = new RadioButton({text:'не включать',value:1});
      const ndsRadio2 = new RadioButton({text:'Включать,вкл.внеш.налог',value:2});
      const ndsRadio3 = new RadioButton({text:'Включать',value:3});
      const ndsGroupRadio = new RadioButtonsGroup({
        buttons:[
          ndsRadio1,
          ndsRadio2,
          ndsRadio3
        ],
        field:'fInclVAT'
      });
      this.add(ndsRadio1,col2r,ind+=ls);
      this.add(ndsRadio2,col2r,ind+=ls);
      this.add(ndsRadio3,col2r,ind+=ls);
      this.add(ndsGroupRadio);
      
      this.add( new Input({text:'Валюта',field:'fCurncyCode'}),col3,ind=10+ls);
      
      this.add( new BlockLabel({text:'Тип'}),col3r-50,ind+=ls*3);
      const typeRadio1 = new RadioButton({text:'со скидками',value:1});
      const typeRadio2 = new RadioButton({text:'со скидками от кол-ва',value:2});
      const typeRadio3 = new RadioButton({text:'Обратная закупка(ОЗ)',value:3});
      const typeGroupRadio = new RadioButtonsGroup({
        buttons:[
          typeRadio1,
          typeRadio2,
          typeRadio3
        ],
        field:'fDepPrice'
      });
      this.add(typeRadio1,col3r,ind+=ls); 
      this.add(typeRadio2,col3r,ind+=ls);
      this.add(typeRadio3,col3r,ind+=ls);
      this.add(typeGroupRadio);
      
      const prLstMatrix = new Matrix({
        field: 'PriceListsMatrix',
        width: this.width-20,
        height: 170
      });
      this.add(prLstMatrix,10,ind+=ls*2);
      
    }
};