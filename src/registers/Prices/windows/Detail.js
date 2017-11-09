// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

module.exports = class PricesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Цена',
            width    : 400,
            height   : 300
        });
        this.datadef = 'Prices';
    }

    async render() {
      let col1 = 120;
      let col2 = 320;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код товара',field:'fArtCode',width:120}),col1,ind);
      this.add( new Input({text:'Прейскурант',field:'fPLCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment',width:240}),col1,ind+=ls);
      this.add( new Input({text:'Цена',field:'fExVatPrice',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Счёт реализации',field:'fSalesAcc',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Клиент',field:'fCustCode',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Стоимость',field:'fCostPrice',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Счёт ОЗ',field:'fBBVarAcc',width:120}),col1,ind+=ls);
      
      this.add(new Checkbox({text:'Исп.эту цену,не исп.другую калькуляцию цены',field:'fNoOtherPricing',value:1}),col2,ind+=ls*2);
      this.add(new Checkbox({text:'Не пересчитывать',field:'fDonotRecalculate',value:1}),col2,ind+=ls);
      this.add(new Checkbox({text:'Генер. транз. обратной закупки (ОЗ)',field:'fBBGenTrans',value:1}),col2,ind+=ls);
    }
};
