// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/SettingDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');

const windowWidth = 450;
const windowHeight = 300;
module.exports = class CastomerCategoriesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Категории клиентов',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'CustomerCategories';
    }

    async render() {
      let col1 = 100;
      let col2 = 150;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Комментарий',field:'fComment',width:260}),col1,ind+=ls);
      this.add( new Input({text:'Типы класс.',field:'fClassType',width:260}),col1,ind+=ls);
      
      const prTab = new Tab({name:'Ценообразование'});
      prTab.add( new Input({text:'Прейскурант',field:'fPLCode',width:120}),col2,ind=10);
      prTab.add( new Input({text:'Таблица скидок',field:'fRebCode',width:120}),col2,ind+=ls);
      prTab.add( new Input({text:'Процент аванса',field:'fDownPayPerc',width:120}),col2,ind+=ls);
      prTab.add( new Input({text:'Гл.классификация товар.',field:'fMainDispGroup',width:120}),col2,ind+=ls);
      prTab.add( new Input({text:'Класс Веб-заказа',field:'fWebOrderClass',width:120}),col2,ind+=ls);
      const acTab = new Tab({name:'Счета'});
      acTab.add( new Input({text:'Счёт дебиторов',field:'fARAcc',width:120}),col2,ind=10);
      acTab.add( new Input({text:'Счёт безнадеж.дебиторов',field:'fBadARAcc',width:120}),col2,ind+=ls);
      acTab.add( new Input({text:'Счёт авансов.дебиторов',field:'fOnAccAcc',width:120}),col2,ind+=ls);
      acTab.add( new Input({text:'Счёт кредиторов',field:'fAccAP',width:120}),col2,ind+=ls);
      acTab.add( new Input({text:'Счёт авансов.кредиторов',field:'fOnAccAccAP',width:120}),col2,ind+=ls);
      acTab.add( new Input({text:'Счёт удержания',field:'fRetainAcc',width:120}),col2,ind+=ls);
      const wbTab = new Tab({name:'Веб'});
      wbTab.add( new Input({text:'Показывать в веб',field:'fWebDisplays',width:120}),col2,ind=10);
      wbTab.add( new Input({text:'Тип веб-объекта',field:'fWebOrderClass',width:120}),col2,ind+=ls);
      
      //------------------ stack ---------------------------------
      const stack = new Stack({
        width: windowWidth-40,
        height: windowHeight-150,
        tabs: [
          prTab,
          acTab,
          wbTab
        ]
      });
      this.add(stack, 15, 100);
      
    }
};
