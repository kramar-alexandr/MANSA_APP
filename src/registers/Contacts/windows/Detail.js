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


const windowWidth = 800;
const windowHeight = 400;
const headerHeight = 90;

module.exports = class ContactsDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowWidth;
    this.height = windowHeight;
    this.title = 'Контакт';
    this.datadef = 'Contacts';
    this.resizable = true;
  }

  async render() {
    //-------------------------Header----------------------------------------
    (()=>{
      let col1 = 150;
      let col2 = 350;
      let col3 = 500;
      let col4 = 650;
      let indent = 10;
      let ls = 20;
      
      this.add( new Input({text:'Код',field:'fCode'}),col1,indent);
      this.add( new Input({text:'Сокращенно',field:'fSearchKey'}),col1,indent+=ls);
      this.add( new Input({text:'Наименов.',field:'fName', width:260}),col1,indent+=ls);
      indent = 10;
      this.add( new Input({text:'Категория клиента',field:'fCustCat'}),col2,indent);
      this.add( new Input({text:'Категория поставщика',field:'fVECat'}),col2,indent+=ls);
      indent = 10;
      this.add(new Checkbox({ text:'Клиент', field:'fCUType', value:1 }),col3,indent);
      this.add(new Checkbox({ text:'Поставщик', field:'fVEType', value:1 }),col3,indent+=ls);
      indent = 10;
      this.add(new Checkbox({ text:'Сотрудник', field:'fEmployeeType', value:1 }),col4,indent);
      this.add(new Checkbox({ text:'Дилер', field:'fDealerType', value:1 }),col4,indent+=ls);

    })();
    
    //-------------------------Contact tab------------------------------------
    const contactTab = new Tab({ name: 'Контакт' });
    (()=>{
      
      let ind = 10;
      let col1 = 150;
      let col2 = 500;
      let ls = 20;
      
      contactTab.add( new BlockLabel({text:'Юридический адрес'}),col1,ind);
      contactTab.add( new Input({text:'Город',field:'fInvAddr0',width:500}),col1,ind+=ls);
      contactTab.add( new Input({text:'Улица',field:'fInvAddr1',width:500}),col1,ind+=ls);
      contactTab.add( new Input({text:'Здание',field:'fInvAddr2',width:500}),col1,ind+=ls);
      contactTab.add( new Input({text:'Почтовый индекс',field:'fInvAddr3',width:500}),col1,ind+=ls);
      contactTab.add( new Input({text:'Страна',field:'fCountryCode',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Телефон',field:'fPhone',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Доп.телефон',field:'fAltPhone',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Имя в Skype',field:'fSkypeName',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Электронная почта',field:'fEMail',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Основное конт.лицо',field:'fPerson',width:150}),col1,ind+=ls);
      contactTab.add( new Input({text:'Классификация',field:'fClassification',width:500}),col1,ind+=ls);
      ind-=ls*6;
      contactTab.add( new Input({text:'Отдел',field:'fDepartment',width:150}),col2,ind);
      contactTab.add( new Input({text:'Факс',field:'fFax',width:150}),col2,ind+=ls);
      contactTab.add( new Input({text:'Моб.телефон',field:'fMobile',width:150}),col2,ind+=ls);
      contactTab.add( new Input({text:'SIP',field:'fSIPCode',width:150}),col2,ind+=ls);
      contactTab.add( new Input({text:'Префикс',field:'fExtension',width:150}),col2,ind+=ls);
      contactTab.add( new Input({text:'Веб-сайт',field:'fWwwAddr',width:150}),col2,ind+=ls);

    })();
    //---------------------------- Delivery Tab ------------------------------
    const delTab = new Tab({ name : 'Доставка'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      delTab.add( new BlockLabel({text:'Фактический адрес'}),col1,ind);
      delTab.add( new Input({text:'Город',field:'fDelAddr0',width:550}),col1,ind+=ls);
      delTab.add( new Input({text:'Улица',field:'fDelAddr1',width:550}),col1,ind+=ls);
      delTab.add( new Input({text:'Здание',field:'fDelAddr2',width:550}),col1,ind+=ls);
      delTab.add( new Input({text:'Почтовый индекс',field:'fDelAddr3',width:550}),col1,ind+=ls);
      delTab.add( new Input({text:'Страна',field:'fDelCountry',width:120}),col1,ind+=ls);
      delTab.add( new Input({text:'№ фрахта',field:'fFreightNr',width:120}),col1,ind+=ls);
      delTab.add( new Input({text:'Условие отгр.(кл.)',field:'fShipDeal',width:120}),col1,ind+=ls);
      delTab.add( new Input({text:'Способ отгр.(кл.)',field:'fShipMode',width:120}),col1,ind+=ls);
      delTab.add( new Input({text:'Маршрут',field:'fSorting',width:120}),col1,ind+=ls);
      ind-=ls*4;
      delTab.add( new Input({text:'Коментарий к счёту',field:'fOrderComment',width:300}),col2,ind);
      delTab.add( new Input({text:'Регион',field:'fRegion',width:120}),col2,ind+=ls);
      delTab.add( new Input({text:'Условие отгр.(пост.)',field:'fVEShipDeal',width:120}),col2,ind+=ls);
      delTab.add( new Input({text:'Способ отгр.(пост.)',field:'fVEShipMode',width:120}),col2,ind+=ls);
      ind-=ls*2;
      delTab.add( new BlockLabel({text:'Дата отгрузки на основе'}),col3-100,ind);
      const delRadio1 = new RadioButton({text:'текущей',value:1});
      const delRadio2 = new RadioButton({text:'запланированной',value:2});
      const delGroup = new RadioButtonsGroup({
        buttons:[
          delRadio1,
          delRadio2
        ],
        field:'fDeliveryBasedOn'
      });
      delTab.add(delRadio1,col3,ind+=ls);
      delTab.add(delRadio2,col3,ind+=ls);
      this.add(delGroup);
      
    })();
    //---------------------------- Condition Tab ------------------------------
    const condTab = new Tab({ name : 'Условия'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 350;
      let col3 = 550;
      let col4 = 750;
      let ls = 20;
      
      condTab.add( new Input({text:'Условие опл.(кл.)',field:'fPayDeal'}),col1,ind);
      condTab.add( new Input({text:'Лимит кредита (кл.)',field:'fCreditLimit'}),col1,ind+=ls);
      condTab.add( new Input({text:'Лимит кред.(кл.) в дн.',field:'fCreditLimitDays'}),col1,ind+=ls);
      condTab.add( new Input({text:'Наш № у клиента',field:'fTheirCode'}),col1,ind+=ls);
      condTab.add( new Input({text:'Получатель',field:'fInvoiceToCode'}),col1,ind+=ls);
      condTab.add( new Input({text:'Ставка пени',field:'fIntRate'}),col1,ind+=ls*2);
      condTab.add( new Input({text:'Дата создания',field:'fDateCreated'}),col1,ind+=ls);
      condTab.add( new Input({text:'Основной партнер',field:'fMainPartner'}),col1,ind+=ls);
      ind=10;
      condTab.add( new Input({text:'Условие опл.(пост.)',field:'fVEPayDeal'}),col2,ind);
      condTab.add( new Input({text:'Лимит кредита (пост.)',field:'fVECreditLimit'}),col2,ind+=ls);
      condTab.add( new Input({text:'Лимит кред.(пост.) в дн.',field:'fVECreditLimitDays'}),col2,ind+=ls);
      condTab.add( new Input({text:'Наш № у пост-ка',field:'fVECustID'}),col2,ind+=ls);
      condTab.add( new Input({text:'Получатель',field:'fVEInvoiceToCode'}),col2,ind+=ls);
      condTab.add( new Input({text:'Факторинг',field:'fVEFactoring'}),col2,ind+=ls);
      condTab.add( new Input({text:'Мин.сумма заказа',field:'fMinOrdSum'}),col2,ind+=ls);
      condTab.add( new Input({text:'Ссылка',field:'fRefStr'}),col2,ind+=ls);
      condTab.add( new Input({text:'Послед.изменение',field:'fDateCreated'}),col2,ind+=ls);
      ind=10;
      condTab.add(new Checkbox({text:'Закрыт',field:'fBlockedFlag',value:1}),col3,ind);
      condTab.add(new Checkbox({text:'Отложен',field:'fOnHoldFlag',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Напоминания',field:'fRemndrFlag',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Пеня',field:'fInterestFlag',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Счёт аванса',field:'fOnAccount',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Без факторинга',field:'fNoFactoringFlag',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Без доп.налога',field:'fNoTax1',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Только гр.фактур.',field:'fGroupInv',value:1}),col3,ind+=ls);
      condTab.add(new Checkbox({text:'Счёт себе',field:'fSelfBilling',value:1}),col3,ind+=ls);
      ind=10;
      condTab.add(new Checkbox({text:'Клиент EGO',field:'fEGOFlag',value:1}),col4,ind);
      condTab.add(new Checkbox({text:'Клиент EDI',field:'fEDIFlag',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Доступ к БД',field:'fAllowLogin',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Только фиксальные сч/ф',field:'fFiscalFlag',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Не вкл.в рассылку',field:'fNoLetterPosting',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Не вкл.в электр.рас-ку',field:'fNoMailPosting',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Не вкл.нал.на окр.среду',field:'fNoRepa',value:1}),col4,ind+=ls);
      condTab.add(new Checkbox({text:'Без регион.сборов',field:'fNoTax2',value:1}),col4,ind+=ls);
    })();

    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      buttonWidth:65,
      tabs: [
        contactTab,
        delTab,
        condTab,
        
      ]
    });
    this.add(stack, 5, headerHeight);
    
  }
};
