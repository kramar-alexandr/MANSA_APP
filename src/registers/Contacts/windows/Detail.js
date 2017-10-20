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
const windowHeight = 440;
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
    //----------------------------- Pricing Tab ---------------------------
    const prcTab = new Tab({ name : 'Ценообраз.'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      prcTab.add( new Input({text:'Валюта(кл.)',field:'fCurncyCode'}),col1,ind);
      prcTab.add( new Input({text:'Прейскурант',field:'fPLCode'}),col1,ind+=ls);
      prcTab.add( new Input({text:'Таблица скидок',field:'fRebCode'}),col1,ind+=ls);
      prcTab.add( new Input({text:'Продавец',field:'fSalesMan'}),col1,ind+=ls);
      prcTab.add( new Input({text:'Товары по умолч.',field:'fCompItemCode'}),col1,ind+=ls);
      ind = 10;
      prcTab.add( new Input({text:'Валюта(пост.)',field:'fVECurncyCode'}),col2,ind);
      prcTab.add( new Input({text:'Таблица скидок',field:'fVERebCode'}),col2,ind+=ls*2);
      prcTab.add( new Input({text:'Группа продаж',field:'fSalesGroup'}),col2,ind+=ls);
      ind = 10;
      prcTab.add( new BlockLabel({text:'Цена основана на'}),col3-100,ind);
      const prcRadio1 = new RadioButton({text:'на дату счет',value:1});
      const prcRadio2 = new RadioButton({text:'на дату запл.отгрузки',value:2});
      const prcRadio3 = new RadioButton({text:'на дату отправки',value:3});
      const prcGroup = new RadioButtonsGroup({
        buttons:[
          prcRadio1,
          prcRadio2,
          prcRadio3
        ],
        field:'fPriceBasedOn'
      });
      prcTab.add(prcRadio1,col3,ind+=ls);
      prcTab.add(prcRadio2,col3,ind+=ls);
      prcTab.add(prcRadio3,col3,ind+=ls);
      this.add(prcGroup);
    })();
    //------------------------------ Company TAB ----------------------------------
    const compTab = new Tab({name:'Копмания'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      compTab.add( new Input({text:'Комментарий',field:'fComment',width:600}),col1,ind);
      compTab.add( new Input({text:'Предупр.(кл.)',field:'fWarnText1',width:600}),col1,ind+=ls);
      compTab.add( new Input({text:'Предупр.(пост.)',field:'fVEWarnText1',width:600}),col1,ind+=ls);
      compTab.add( new Input({text:'ИНН',field:'fVATNr',width:120}),col1,ind+=ls);
      compTab.add( new Input({text:'Дата пров.НДС',field:'fVATNrCheckDate',width:120}),col1,ind+=ls);
      compTab.add( new Input({text:'Код НДС(кл.)',field:'fVATCode',width:120}),col1,ind+=ls);
      compTab.add( new Input({text:'Код НДС покупки',field:'fVEVATCode',width:120}),col1,ind+=ls);
      compTab.add( new Input({text:'Язык',field:'fLangCode',width:120}),col1,ind+=ls);
      ind-=ls*4;
      compTab.add( new Input({text:'ОКПО',field:'fRegNr1',width:120}),col2,ind);
      compTab.add( new Input({text:'Рег.номер',field:'fRegNr2',width:120}),col2,ind+=ls);
      compTab.add( new Input({text:'ГНР',field:'fRecipientGLN',width:120}),col2,ind+=ls);
      
      ind-=ls*2;
      compTab.add( new BlockLabel({text:'Тип'}),col3-40,ind);
      const coRadio1 = new RadioButton({text:'Компания',value:1});
      const coRadio2 = new RadioButton({text:'Персона',value:2});
      const coGroup = new RadioButtonsGroup({
        buttons:[
          coRadio1,
          coRadio2
        ],
        field:'fCustType'
      });
      compTab.add(coRadio1,col3,ind+=ls);
      compTab.add(coRadio2,col3,ind+=ls);
      this.add(coGroup);
    })();
    //------------------------------ Acc TAB ----------------------------------
    const accTab = new Tab({name:'Счета'});
    (()=>{
      let ind = 10;
      let col1 = 200;
      let col2 = 500;
      let ls = 20;
      
      accTab.add( new Input({text:'Счёт кредиторов',field:'fAccAP',width:120}),col1,ind);
      accTab.add( new Input({text:'Контрольный счёт',field:'fAccCost',width:120}),col1,ind+=ls);
      accTab.add( new Input({text:'Счёт аванса',field:'fOnAccAccAP',width:120}),col1,ind+=ls);
      accTab.add( new Input({text:'Объекты(кл.)',field:'fObjects',width:120}),col1,ind+=ls);
      accTab.add( new Input({text:'Объекты(пост.)',field:'fVEObjects',width:120}),col1,ind+=ls);
      accTab.add( new Input({text:'Код платежа',field:'fPaymentCode',width:120}),col1,ind+=ls);
      ind = 10;
      accTab.add( new Input({text:'IBAN код',field:'fIBANCode',width:200}),col2,ind);
      accTab.add( new Input({text:'Оператор счёта',field:'fAccOperator',width:200}),col2,ind+=ls);
      accTab.add( new Input({text:'Р/с',field:'fBankAccount',width:200}),col2,ind+=ls);
      accTab.add( new Input({text:'Р/с 2',field:'fBank',width:200}),col2,ind+=ls);
      accTab.add( new Input({text:'Код сортировки',field:'fSortCode',width:200}),col2,ind+=ls);
      accTab.add( new Input({text:'Способы плат.удерж.',field:'fWithPayMode',width:200}),col2,ind+=ls);
      
    })();
    //------------------------------ Web TAB ----------------------------------
    const webTab = new Tab({name:'Веб'});
    (()=>{
      let ind = 10;
      let col1 = 200;
      let col2 = 500;
      let ls = 20;
      
      webTab.add( new Input({text:'Веб-конференция',field:'fWebConf',width:120}),col1,ind);
      webTab.add( new Input({text:'Первая страница Веб',field:'fWebStartPage',width:120}),col1,ind+=ls);
      webTab.add( new Input({text:'Код доставки',field:'fFreightCode',width:120}),col1,ind+=ls);
      ind = 10;
      webTab.add( new Input({text:'Главная классификац.',field:'fMainDispGroup',width:120}),col2,ind);
      webTab.add( new Input({text:'Отображать в Веб',field:'fWebDisplays',width:120}),col2,ind+=ls);
      
    })();
    //------------------------------ Web TAB ----------------------------------
    const commTab = new Tab({name:'Веб'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let ls = 20;
      
      commTab.add( new Input({text:'Комментарий',field:'fComment0',width:500}),col1,ind);
      commTab.add( new Input({text:'',field:'fComment1',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'',field:'fComment2',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'Должность',field:'fTitle',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'Служ.обязаность',field:'fJobDesc',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'Обращение 1',field:'fSalutation1',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'Обращение 2',field:'fSalutation2',width:500}),col1,ind+=ls);
      commTab.add( new Input({text:'Обращение 3',field:'fSalutation3',width:500}),col1,ind+=ls);

    })();
    //------------------------------ Guest TAB ----------------------------------
    const gsTab = new Tab({name:'Гость'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      gsTab.add( new Input({text:'Тип документа',field:'fDocType',width:120}),col1,ind);
      gsTab.add( new Input({text:'Гражданство',field:'fNationality',width:120}),col1,ind+=ls*2);
      gsTab.add( new Input({text:'Дата рождения',field:'fBirthDate',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Место рождения',field:'fBirthPlace',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Страна рождения',field:'fBirthCountry',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Профессия',field:'fProfesion',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Газета',field:'fNewspaper',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Пароль',field:'fPassphrase',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Тур оператор',field:'fTourOperator',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Агент',field:'fAgent',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Вид оплаты',field:'fDefGuestPayMode',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Источник заказа',field:'fBookOrigin',width:120}),col1,ind+=ls);
      gsTab.add( new Input({text:'Отметки о диете',field:'fDietRemarks',width:280}),col1,ind+=ls);
      gsTab.add( new Input({text:'Отметки о треб.',field:'fRequirementRemarks',width:280}),col1,ind+=ls);
      
      ind = 10;
      gsTab.add( new Input({text:'Номер паспорта',field:'fPassportNr',width:280}),col2,ind);      
      gsTab.add( new BlockLabel({text:'Пол'}),col2-30,ind+=ls*2);
      const genRadio1 = new RadioButton({text:'Мужской',value:1});
      const genRadio2 = new RadioButton({text:'Женский',value:2});
      const genGroup = new RadioButtonsGroup({
        buttons:[
          genRadio1,
          genRadio2
        ],
        field:'fGender'
      });
      gsTab.add(genRadio1,col2,ind+=ls);
      gsTab.add(genRadio2,col2,ind+=ls);
      this.add(genGroup);
            
      gsTab.add( new BlockLabel({text:'Семейное положение'}),col2-70,ind+=ls*2);
      const merRadio1 = new RadioButton({text:'Не женат',value:1});
      const merRadio2 = new RadioButton({text:'Замужем',value:2});
      const merRadio3 = new RadioButton({text:'В разводе',value:3});
      const merRadio4 = new RadioButton({text:'Вдова/-ец',value:4});
      const merGroup = new RadioButtonsGroup({
        buttons:[
          merRadio1,
          merRadio2,
          merRadio3,
          merRadio4
        ],
        field:'fMarStatus'
      });
      gsTab.add(merRadio1,col2,ind+=ls);
      gsTab.add(merRadio2,col2,ind+=ls);
      gsTab.add(merRadio3,col2,ind+=ls);
      gsTab.add(merRadio4,col2,ind+=ls);
      this.add(merGroup);
      
      ind-=ls*10;    
      gsTab.add( new BlockLabel({text:'Возраст'}),col3-30,ind+=ls*2);
      const ageRadio1 = new RadioButton({text:'Ребенок',value:1});
      const ageRadio2 = new RadioButton({text:'Взрослый',value:2});
      const ageRadio3 = new RadioButton({text:'Пенсионер',value:3});
      const ageGroup = new RadioButtonsGroup({
        buttons:[
          ageRadio1,
          ageRadio2,
          ageRadio3
        ],
        field:'fAgeStatus'
      });
      gsTab.add(ageRadio1,col3,ind+=ls);
      gsTab.add(ageRadio2,col3,ind+=ls);
      gsTab.add(ageRadio3,col3,ind+=ls);
      this.add(ageGroup);
      
      gsTab.add(new Checkbox({text:'Курит',field:'fSmoking',value:1}),col3,ind+=ls*2);
      gsTab.add(new Checkbox({text:'В черном списке',field:'fBlacklist',value:1}),col3,ind+=ls);
      
    })();
    //----------------------------- Notes Tab ----------------------------
    const noteTab = new Tab({name:'Заметки'});
    (()=>{
      noteTab.add(new Input({text:'Заметки',field:'fMath2',width:400,height:250}),100,30);
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
        prcTab,
        compTab,
        accTab,
        webTab,
        commTab,
        gsTab,
        noteTab
        
      ]
    });
    this.add(stack, 5, headerHeight);
    
  }
};
