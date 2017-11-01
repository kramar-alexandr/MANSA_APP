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


const windowWidth = 520;
const windowHeight = 340;
const headerHeight = 60;

module.exports = class CurncyCodesDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowWidth;
    this.height = windowHeight;
    this.title = 'Валюта';
    this.datadef = 'CurncyCodes';
    this.resizable = true;
  }

  async render() {
    
    //-------------------Header----------------------------------------
    (()=>{
      const curncyCodeInput = new Input({
        width: 80,
        text: 'Код',
        field: 'fCurncyCode'
      });

      const commentInput = new Input({
        width: 100,
        text: 'Наименование',
        field: 'fComment'
      });
      
      this.add(curncyCodeInput, 95, 10);
      this.add(commentInput, 300, 10);
      
    })();
    
    //----------------Interval tab------------------------------------
    const intervalTab = new Tab({
      name: 'Интервал'
    });
    (()=>{
      
      let indent = 10;
      let firstColumn = 120;
      let secondColumn = 220;
      let thirdColumn = 320;
      
      intervalTab.add( new BlockLabel({text:'С валюты'}),firstColumn,indent );
      intervalTab.add( new BlockLabel({text:'Осн. валюта 1'}),secondColumn,indent );
      intervalTab.add( new BlockLabel({text:'Осн. валюта 2'}),thirdColumn,indent );
      
      intervalTab.add( new Input({text:'По умолч.',field:'fDefaultFrom'}),firstColumn,indent + 20);
      intervalTab.add( new Input({text:'', field:'fDefaultTo1'}),secondColumn,indent + 20);
      intervalTab.add( new Input({text:'', field:'fDefaultTo2'}),thirdColumn,indent + 20);
      
      intervalTab.add( new Input({text:'Мин.',field:'fMinFrom'}),firstColumn,indent + 40);
      intervalTab.add( new Input({text:'', field:'fMinTo1'}),secondColumn,indent + 40);
      intervalTab.add( new Input({text:'', field:'fMinTo2'}),thirdColumn,indent + 40);
      
      intervalTab.add( new Input({text:'Макс.',field:'fMaxFrom'}),firstColumn,indent + 60);
      intervalTab.add( new Input({text:'', field:'fMaxTo1'}),secondColumn,indent + 60);
      intervalTab.add( new Input({text:'', field:'fMaxTo2'}),thirdColumn,indent + 60);
    })();
    //------------------ EMU Tab ------------------------------------------
    
    const emuTab = new Tab({
      name: 'EMU'
    });
    (()=>{
      let indent = 20;
      let firstColumn = 200;
      let secondColumn = 300;
      
      emuTab.add(new Checkbox({
        text:'Не допускать изм. осн. курса',
        field:'fNoChangeBase',
        value:1
      }),firstColumn,indent);
      emuTab.add(new Checkbox({
        text:'Не допускать изм. внешнего курса',
        field:'fNoChangeForeign',
        value:1
      }),firstColumn,indent+20);
      emuTab.add(new Checkbox({
        text:'Член ЕС',
        field:'fEMUCurncy',
        value:1
      }),firstColumn,indent+40);
      emuTab.add( new Input({text:'Дата', field:'fEMUDate'}),secondColumn,indent + 20);
      
    })();
    
    //----------------------------- Round Tab -----------------------------
    const roundTab = new Tab({
      name: 'Округл.'
    });
    (()=>{
      let column = 200;
      let indent = 20;
      roundTab.add( new Input({text:'Лимит авто-округления', field:'fAutoRoundof'}),column,indent);
      roundTab.add( new Input({text:'Лимит авто-списания', field:'fAutoWriteof'}),column,indent + 20);
      
    })();
    //---------------------------- Text Tab -------------------------------
    const txtTab = new Tab({
      name: 'Текст'
    });
    (()=>{
      let firstColumn = 200;
      let secondColumn = 300;
      let indent = 20;
      
      txtTab.add( new Input({text:'Название целых валюты', field:'fCurText'}),firstColumn,indent);
      txtTab.add( new Input({text:'для значений от 2 до 4', field:'fCurText1'}),firstColumn,indent + 20);
      txtTab.add( new Input({text:'для значений от 5', field:'fCurText2'}),firstColumn,indent + 40);
      txtTab.add( new Input({text:'Название десят. валюты', field:'fMinorCurText'}),firstColumn,indent + 60);
      txtTab.add( new Input({text:'для значений от 2 до 4', field:'fMinorCurText1'}),firstColumn,indent + 80);
      txtTab.add( new Input({text:'для значений от 5', field:'fRowMinorCurText2'}),firstColumn,indent + 100);
      
      
      txtTab.add( new BlockLabel({text:'Род'}),secondColumn,indent);
      txtTab.add( new BlockLabel({text:'Род'}),secondColumn,indent + 60);

      const manCurGendRadio = new RadioButton({
          text: 'Мужской',
          value:1
      });
      const womanCurGendRadio = new RadioButton({
          text: 'Женский',
          value:2
      });
      const curGenderGroup = new RadioButtonsGroup({
        buttons:[
          manCurGendRadio,
          womanCurGendRadio
        ],
        field:'fCurGender'
      });
      txtTab.add(manCurGendRadio,secondColumn + 50, indent + 20);
      txtTab.add(womanCurGendRadio,secondColumn + 50, indent + 40);
      this.add(curGenderGroup);
      
      const manMinorCurGendRadio = new RadioButton({
          text: 'Мужской',
          value:1
      });
      const womanMinorCurGendRadio = new RadioButton({
          text: 'Женский',
          value:2
      });
      const curMinorGenderGroup = new RadioButtonsGroup({
        buttons:[
          manMinorCurGendRadio,
          womanMinorCurGendRadio
        ],
        field:'fMinorCurGender'
      });
      txtTab.add(manMinorCurGendRadio,secondColumn + 50, indent + 80);
      txtTab.add(womanMinorCurGendRadio,secondColumn + 50, indent + 100);
      this.add(curMinorGenderGroup);
      
      txtTab.add(new Matrix(
        {
          field: 'fMathMatrix',
          width: windowWidth-20,
          height: 80
        }), 10, indent + 130);
    })();
    //------------------------------ Other TAB ----------------------------
    const otherTab = new Tab({
      name: 'Прочее'
    });
    (()=>{
      otherTab.add( new Input({text:'Tax Code',field:'fTaxOfficeCode'}),200,20);
    })();
    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      tabs: [
        intervalTab,
        emuTab,
        roundTab,
        txtTab,
        otherTab
      ]
    });
    this.add(stack, 5, headerHeight);
    
  }
};
