// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

module.exports = class ExchangeRatesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Курс обмена',
            width    : 400,
            height   : 300
        });
        this.datadef = 'ExchangeRates';
    }

    async render() {
      let col1 = 120;
      let col0 = 80;
      let col2 = 260;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Валюта',field:'fArtCode', width:120}),col1,ind);
      this.add( new Input({text:'Дата',field:'fPLCode', width:120}),col1,ind+=ls);
      
      const curseTab = new Tab({
        name: 'Курс'
      });
      curseTab.add( new Input({text:'Курс',field:'fFrRate'}),col0,ind=20);
      curseTab.add( new Input({text:'Осн.вал.1',field:'fToRate1'}),col2,ind);
      curseTab.add( new Input({text:'Осн.вал.2',field:'fToRate2'}),col2,ind+=ls);
      
      const forexTab = new Tab({
        name: 'Forex'
      });
      
      forexTab.add( new Input({text:'Курс продаж',field:'fFrRate'}),col0,ind=20);
      forexTab.add( new Input({text:'Курс покупок',field:'fFrRate'}),col0,ind+=ls);
      forexTab.add( new Input({text:'Осн.вал.1',field:'fPurchaseRateTo1'}),col2,ind=20);
      forexTab.add( new Input({text:'Осн.вал.2',field:'fSalesRateTo1'}),col2,ind+=ls);
      
      const stack = new Stack({
        width: this.width-20,
        height: 160,
        tabs: [
          curseTab,
          forexTab
        ]
      });
      this.add(stack, 10, 80);
      
    }
};
