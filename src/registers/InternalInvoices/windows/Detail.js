// @flow

const Register = require('erpjs/core/client/Register');

const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const oneColumnedLayout = require('erpjs/core/client/layouts/oneColumnedLayout');
const Input = require('erpjs/core/client/components/Input');
const Button = require('erpjs/core/client/components/Button');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');
const Matrix = require('erpjs/core/client/components/Matrix');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const Header = require('erpjs/core/client/components/Header');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');


const windowWidth = 600;
const windowHeight = 440;
const headerHeight = 120;

module.exports = class InternalInvoicesDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowWidth;
    this.height = windowHeight;
    this.title = 'Внутренняя счет-фактура';
    this.datadef = 'InternalInvoices';
    this.resizable = true;
  }

  async render() {
    //-------------------------Header----------------------------------------
    (()=>{
      let col1 = 100;
      let col2 = 270;
      let col3 = 550;
      let ind = 10;
      let ls = 20;
      
      this.add( new Input({text:'Номер',field:'fSerNr'}),col1,ind);
      this.add( new Input({text:'Сотрудник',field:'fSalesMan'}),col1,ind+=ls);
      this.add( new Input({text:'Дата опер.',field:'fTransDate'}),col1,ind+=ls);
      this.add( new Input({text:'Язык',field:'fLangCode'}),col1,ind+=ls);
      ind = 10;
      this.add( new Input({text:'ФИО',field:'fAddr0',width:300}),col2,ind);
      this.add( new Input({text:'№ сч.ф поставщ.',field:'fOfficialSerNr'}),col2,ind+=ls*2);
      this.add( new Input({text:'Ссылка',field:'fReference'}),col2,ind+=ls);
      this.add(new Checkbox({text:'ОК',field:'fOKFlag',value:1}),col3,ind);
    })();
    
    //------------------------------ Items TAB ----------------------------------
    const itemsTab = new Tab({name:'Товары'});
    (()=>{
      let ind = windowHeight-headerHeight-80;
      let col0 = 150;
      let col1 = 300;
      let col2 = 450;
      let ls = 20;
      
      itemsTab.add(new Matrix(
      {
        field: 'InternalInvoicesMatrix',
        width: windowWidth-40,
        height: windowHeight-headerHeight-100
      }), 15, 15);
      itemsTab.add( new Input({text:'НДС',field:'fSum3'}),col1,ind);
      itemsTab.add( new Input({text:'Итого',field:'fSum1'}),col2,ind);
      itemsTab.add( new Input({text:'Всего',field:'fSum4'}),col2,ind+=ls);
      
    })();
    //------------------------------ Misk TAB ----------------------------------
    const miskTab = new Tab({name:'Разное'});
    (()=>{
      miskTab.add( new BlockLabel({text:'НДС'}),col0-50,ind=10);
      const ndsRadio1 = new RadioButton({text:'Внутренний',value:1});
      const ndsRadio2 = new RadioButton({text:'в пределах ЕС',value:2});
      const ndsRadio3 = new RadioButton({text:'в пределах ЕС(НДС)',value:3});
      const ndsRadio4 = new RadioButton({text:'за пределами ЕС',value:4});
      const ndsRadio5 = new RadioButton({text:'за пределами ЕС(НДС)',value:5});
      //todo:find field to ndsGroup
      /*
      const ndsGroup = new RadioButtonsGroup({
        buttons:[
          ndsRadio1,
          ndsRadio2,
          ndsRadio3,
          ndsRadio4,
          ndsRadio5,
        ],
        field:''
      });
      */
      miskTab.add(ndsRadio1,col0,ind+=ls);
      miskTab.add(ndsRadio2,col0,ind+=ls);
      miskTab.add(ndsRadio3,col0,ind+=ls);
      miskTab.add(ndsRadio4,col0,ind+=ls);
      miskTab.add(ndsRadio5,col0,ind+=ls);
      //this.add(ndsGroup);
    })();
      
    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      buttonWidth:65,
      tabs: [
        itemsTab,
        miskTab
      ]
    });
    this.add(stack, 5, headerHeight);
  }
};
