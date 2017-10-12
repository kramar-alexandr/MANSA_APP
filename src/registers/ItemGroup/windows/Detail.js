// @flow

const Register = require('erpjs/core/client/Register');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const oneColumnedLayout    = require('erpjs/core/client/layouts/oneColumnedLayout');
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
const windowHeight = 500;
const headerHeight = 80;
const headerMarginLeft = 150;
const stackHeight = 400;

module.exports = class ItemsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super(args);

        this.width   = windowWidth;
        this.height  = windowHeight;
        this.title   = 'Группа товаров';
        this.datadef = 'ItemGroup';
        this.resizable = true;
    }

    async render() {
      var self = this;
      //--------------------------- Header ------------------------------------
      (function MakeHeader(selfObj){
        const codeInput = new Input({
          width: 80,
          text: 'Код',
          field: 'fCode'
        });

        const commentInput = new Input({
          width: 140,
          text: 'Наименование',
          field: 'fComment'
        });
        
        const classTypeInput = new Input({
          width: 140,
          text: 'Тип классификации',
          field: 'fClassType'
        });
        
        selfObj.add(codeInput, headerMarginLeft, 10);
        selfObj.add(commentInput, headerMarginLeft, 30);
        selfObj.add(classTypeInput, headerMarginLeft, 50);
      })(self);
      
      
      //---------------------------Acc Tab-------------------------------------
      const accTab = new Tab({ name: 'Счета'});
      (function FillAccTab(){
        let firstColumn = 130;
        let indent = 10;
        
        const salesAccInput = new Input({
          width: 80,
          text: 'Счёт реализации',
          field: 'fSalesAcc'
        });
        
        const euSalesAccInput = new Input({
          width: 80,
          text: 'ЕС счёт реализации',
          field: 'fEUSalesAcc'
        });
        const expSalesAccInput = new Input({
         width:80,
         text: 'Счёт реализации,эксп.',
         field: 'fExpSalesAccInput'
        });
        const costAccInput = new Input({
         width:80,
         text: 'Счёт затрат',
         field: 'fCostAcc'
        });
        const eucostAccInput = new Input({
         width:80,
         text: 'ЕС cчёт затрат',
         field: 'fEUCostAcc'
        });
        const expCostAccInput = new Input({
         width:80,
         text: 'Счёт затрат,эксп.',
         field: 'fExpCostAcc'
        });
        const wipAccInput = new Input({
         width:80,
         text: 'Счёт WIP',
         field: 'fWIPAcc'
        });
        const compUsageInput = new Input({
         width:80,
         text: 'Использов.компон.',
         field: 'fCompUsage'
        });
        const prodControlInput = new Input({
         width:80,
         text: 'Контр.производства',
         field: 'fProdControl'
        });
        const prodWCostAccInput = new Input({
         width:80,
         text: 'Затраты на труд',
         field: 'fProdWCostAcc'
        });
        const hotelWipAccInput = new Input({
         width:80,
         text: 'Отель WIP',
         field: 'fHotelWIPAcc'
        });
        
        accTab.add(salesAccInput,firstColumn,indent);
        accTab.add(euSalesAccInput,firstColumn,indent+20);
        accTab.add(expSalesAccInput,firstColumn,indent+40);
        accTab.add(costAccInput,firstColumn,indent+60);
        accTab.add(eucostAccInput,firstColumn,indent+80);
        accTab.add(expCostAccInput,firstColumn,indent+100);
        accTab.add(wipAccInput,firstColumn,indent+120);
        accTab.add(compUsageInput,firstColumn,indent+140);
        accTab.add(prodControlInput,firstColumn,indent+160);
        accTab.add(prodWCostAccInput,firstColumn,indent+180);
        accTab.add(hotelWipAccInput,firstColumn,indent+200);
      })();
      
      //----------------------------------Final Stack --------------------------
      const stack = new Stack({
        width: windowWidth-10,
        height: stackHeight,
        tabs: [
          accTab
        ]
      });
      this.add(stack, 5, headerHeight+10);
    }
};