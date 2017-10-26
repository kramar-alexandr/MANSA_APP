// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

const windowWidth = 420;
const windowHeight = 520;
module.exports = class PaymentTermsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Условия оплаты',
            width    : windowWidth,
            height   : windowHeight
        });

        this.datadef = 'PaymentTerms';
    }

    async render() {
      let col0 = 15;
      let col1 = 110;
      let col2 = 310;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode'}),col1,ind);
      this.add( new Input({text:'Текст',field:'fPdComment',width:260}),col1,ind+=ls);
      this.add( new Input({text:'Дней',field:'fPdrdays'}),col1,ind+=ls);
      this.add( new Input({text:'Сконто,%',field:'fPdvrebt'}),col1,ind+=ls);
      this.add( new Input({text:'Сконто,дни',field:'fPdrdays'}),col1,ind+=ls);
      this.add( new Input({text:'Прейскурант',field:'fPriceList'}),col1,ind+=ls);
      this.add( new Input({text:'Взнос',field:'fInstallment'}),col1,ind+=ls);
      this.add( new Input({text:'Счёт кассы',field:'fPdCashAcc'}),col1,ind+=ls);
      this.add( new Input({text:'Счёт реализации',field:'fPdSalesAcc'}),col1,ind+=ls);
      ind = 10;
      //this.add(new Checkbox({text:'',field:'',value:1}),col4,ind);
      this.add( new Input({text:'Сконто 2,%',field:'fPdvrebt2'}),col2,ind+=ls*3);
      this.add( new Input({text:'Сконто 2,дни',field:'fPdrdays2'}),col2,ind+=ls);
      this.add( new BlockLabel({text:'Тип'}),col2-20,ind+=ls*2);
      const typeRadio1 = new RadioButton({text:'Обычный',value:1});
      const typeRadio2 = new RadioButton({text:'Кредитный счет',value:2});
      const typeRadio3 = new RadioButton({text:'Наличный расчет',value:3});
      const typeRadio4 = new RadioButton({text:'Следующий месяц',value:4});
      const typeRadio5 = new RadioButton({text:'Сч/ф пени (вручную)',value:5});
      const typeRadio6 = new RadioButton({text:'Учетный период+дней',value:6});
      const typeRadio7 = new RadioButton({text:'Сотрудник',value:7});
      
      const typeGroup = new RadioButtonsGroup({
        buttons:[
          typeRadio1,
          typeRadio2,
          typeRadio3,
          typeRadio4,
          typeRadio5,
          typeRadio6,
          typeRadio7
        ],
        field:'fPDType'
      });
      this.add(typeRadio1,col2,ind+=ls);
      this.add(typeRadio2,col2,ind+=ls);
      this.add(typeRadio3,col2,ind+=ls);
      this.add(typeRadio4,col2,ind+=ls);
      this.add(typeRadio5,col2,ind+=ls);
      this.add(typeRadio6,col2,ind+=ls);
      this.add(typeRadio7,col2,ind+=ls);
      this.add(typeGroup);
      
      this.add(new Matrix({
        field: 'PaymentTermsMatrix',
        width: windowWidth-40,
        height: windowHeight-100
      }), col0, ind+=ls*2);
    }
};
