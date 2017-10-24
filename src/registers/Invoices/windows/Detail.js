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

module.exports = class InvoicesDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowWidth;
    this.height = windowHeight;
    this.title = 'Счет-фактура клиенту';
    this.datadef = 'Invoices';
    this.resizable = true;
  }

  async render() {
    //-------------------------Header----------------------------------------
    (()=>{
      let col1 = 150;
      let col2 = 350;
      let col3 = 600;
      let ind = 10;
      let ls = 20;
      
      this.add( new Input({text:'Номер',field:'fSerNr',width:100}),col1,ind);
      this.add( new Input({text:'Клиент',field:'fCustCode',width:100}),col1,ind+=ls);
      
      ind = 10;
      this.add( new Input({text:'Наим.',field:'fAddr0',width:300}),col2,ind);
      this.add( new Input({text:'Офиц. №',field:'fOfficialSerNr',width:100}),col2,ind+=ls);
      this.add(new Checkbox({text:'ОК',field:'fOKFlag',value:1}),col3,ind);
    })();
      
      //------------------------------ Time TAB ----------------------------------
    const tmTab = new Tab({name:'Сроки'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      tmTab.add( new Input({text:'Дата с/ф',field:'fInvDate',width:100}),col1,ind);
      tmTab.add( new Input({text:'Условия оплаты',field:'fPayDeal',width:100}),col1,ind+=ls);
      tmTab.add( new Input({text:'Дата оплаты',field:'fPayDate',width:100}),col1,ind+=ls);
      tmTab.add( new Input({text:'Дата операции',field:'fTransDate',width:100}),col1,ind+=ls);
      tmTab.add( new Input({text:'Дата оказ.услуги',field:'fServiceDelDate',width:100}),col1,ind+=ls);
      ind=10;
      tmTab.add( new Input({text:'Ответственный',field:'fOurContact',width:100}),col2,ind);
      tmTab.add( new Input({text:'Внимание',field:'fClientContact',width:100}),col2,ind+=ls);
      tmTab.add( new Input({text:'Объекты',field:'fObjects',width:100}),col2,ind+=ls);
      tmTab.add( new Input({text:'Ответственный',field:'fRefStr',width:100}),col2,ind+=ls);
      tmTab.add( new Input({text:'№ счёта клиенту',field:'fCustOrdNr',width:100}),col2,ind+=ls);
      ind=10;
      tmTab.add( new Input({text:'Продавец',field:'fSalesMan',width:100}),col3,ind);
      tmTab.add( new Input({text:'Проект',field:'fPRCode',width:100}),col3,ind+=ls);
      tmTab.add( new Input({text:'Причина кр.сч/ф',field:'fReason',width:100}),col3,ind+=ls);
      tmTab.add( new Input({text:'К пл.рсч док-ту',field:'fReceiptInfo',width:100}),col3,ind+=ls);
      
      tmTab.add(new Checkbox({text:'Спорные',field:'fDisputedFlag',value:1}),col3,ind+=ls);
    })();
    //------------------------------ Items TAB ----------------------------------
    const itemsTab = new Tab({name:'Товары'});
    (()=>{
      itemsTab.add(new Matrix(
        {
          field: 'InvoicesMatrix',
          width: windowWidth-40,
          height: 120
        }), 15, 15);
    })();
    //------------------------------ Currency TAB ----------------------------------
    const curTab = new Tab({name:'Валюта'});
    (()=>{
      let ind = 10;
      let col1 = 250;
      let col2 = 500;
      let ls = 20;
      
      curTab.add( new Input({text:'Валюта',field:'fCurncyCode'}),col1,ind);
      curTab.add( new Input({text:'Основная валюта 1',field:'BaseRate1'}),col1,ind+=ls);
      curTab.add( new Input({text:'Основная валюта 2',field:'BaseRate2'}),col1,ind+=ls);
      ind = 10;
      curTab.add( new Input({text:'Курс',field:'fFrRate'}),col2,ind);
      curTab.add( new Input({text:'Основная валюта 1',field:''}),col2,ind+=ls);
      curTab.add( new Input({text:'Основная валюта 2',field:''}),col2,ind+=ls);
      
    })();
    //------------------------------ Condition TAB ----------------------------------
    const condTab = new Tab({name:'Условия отгр.'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      condTab.add( new Input({text:'Условия отгрузки',field:'fShipDeal'}),col1,ind);
      condTab.add( new Input({text:'Метод доставки',field:'fShipMode'}),col1,ind+=ls);
      condTab.add( new Input({text:'Маршрут',field:'fSorting'}),col1,ind+=ls);
      condTab.add( new Input({text:'Склад',field:'fLocation'}),col1,ind+=ls);
      condTab.add( new Input({text:'План.дата отпр.',field:'fPlanSendDate'}),col1,ind+=ls);
      condTab.add( new Input({text:'План.время отпр.',field:'fPlanSendTime'}),col1,ind+=ls);
      condTab.add( new Input({text:'Подразделение',field:'fBranchID'}),col1,ind+=ls);
      
      condTab.add( new Input({text:'Итого кол-во',field:'fTotQty'}),col2,ind=10);
      condTab.add( new Input({text:'Итого вес',field:'fTotWeight'}),col2,ind+=ls);
      condTab.add( new Input({text:'Итого объем',field:'fTotVolume'}),col2,ind+=ls);
      condTab.add( new Input({text:'Фрахт',field:'fFrPrice'}),col2,ind+=ls);
      condTab.add( new Input({text:'План.дата приб.',field:'fPlanArrDate'}),col2,ind+=ls);
      condTab.add( new Input({text:'План.время приб.',field:'fPlanArrTime'}),col2,ind+=ls);
      condTab.add( new Input({text:'Трансп.комп.',field:'fFreightCode'}),col2,ind+=ls);
      
      condTab.add(new Checkbox({text:'Обновить склад',field:'fUpdStockFlag',value:1}),col3,ind=10);
      condTab.add( new Input({text:'НДС фрахта',field:'fFrVATCode'}),col3,ind+=ls*2);
      condTab.add( new Input({text:'Код транс.Интр.',field:'fIntrastatTransCode'}),col3,ind+=ls);
      condTab.add( new Input({text:'Глоб.№ трансп.',field:'fGlobalTransportNr'}),col3,ind+=ls);
      condTab.add( new Input({text:'Глоб.дата трансп.',field:'fGlobalTransportDate'}),col3,ind+=ls);
      
    })();
    //------------------------------ Identifiers TAB ----------------------------------
    const idenTab = new Tab({name:'Идентификат.'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 350;
      let col3 = 570;
      let col4 = 750;
      let ls = 20;
      
      idenTab.add( new Input({text:'Номер счета',field:'fOrderNr'}),col1,ind);
      idenTab.add( new Input({text:'Зак.на обсл.',field:'fSVONr'}),col1,ind+=ls);
      idenTab.add( new Input({text:'№ кред.договор.',field:'fCredManNr'}),col1,ind+=ls);
      idenTab.add( new Input({text:'Официальный № 2',field:'fOfficialSerNr2'}),col1,ind+=ls);
      
      idenTab.add( new Input({text:'Стат.стоимость',field:'fStatVal'}),col2,ind=10);
      idenTab.add( new Input({text:'Время операции',field:'fTransTime'}),col2,ind+=ls);
      
      idenTab.add(new Checkbox({text:'Без напоминаний',field:'NoRemndrFlag',value:1}),col3,ind=10);
      idenTab.add(new Checkbox({text:'Без пени',field:'NoInterestFlag',value:1}),col3,ind+=ls);
      idenTab.add(new Checkbox({text:'Без сборов',field:'NoColectionFlag',value:1}),col3,ind+=ls);
      idenTab.add(new Checkbox({text:'Информация о клиенте',field:'ARonTR',value:1}),col3,ind+=ls);
      
      idenTab.add(new Checkbox({text:'Не посылать как эл. сч/ф',field:'NoEInvoice',value:1}),col4,ind=10);
      idenTab.add(new Checkbox({text:'Фискальная сч/ф',field:'FiscalFlag',value:1}),col4,ind+=ls);
      idenTab.add(new Checkbox({text:'Счет себе',field:'SelfBilling',value:1}),col4,ind+=ls);

    })();
    //------------------------------ __ TAB ----------------------------------
    const priceTab = new Tab({name:'Прайс-лист'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      priceTab.add( new Input({text:'Прайс-лист',field:'fPriceList'}),col1,ind);
      priceTab.add( new Input({text:'Таблица скидок',field:'fRebCode'}),col1,ind+=ls);
      priceTab.add( new Input({text:'Грузо-чатель',field:'fOrgCust'}),col1,ind+=ls);
      priceTab.add( new Input({text:'Кредитная карта',field:'fCreditCard'}),col1,ind+=ls);
      priceTab.add( new Input({text:'Авторизация',field:'fAuthorizationCode'}),col1,ind+=ls);
      priceTab.add( new Input({text:'Счёт дебиторов',field:'fARAcc'}),col1,ind+=ls);
      priceTab.add( new Input({text:'Комментарий',field:'fInvComment',width:560}),col1,ind+=ls);
      
      priceTab.add( new Input({text:'Группа продаж',field:'fSalesGroup'}),col2,ind=10);
      priceTab.add( new Input({text:'Язык',field:'fLangCode'}),col2,ind+=ls);
      priceTab.add( new Input({text:'Комиссия',field:'fCommision'}),col2,ind+=ls);
      priceTab.add( new Input({text:'Итого вкл.ком.',field:'fSumIncCom'}),col2,ind+=ls);
      priceTab.add( new Input({text:'Пеня',field:'fIntCode'}),col2,ind+=ls);
      priceTab.add( new Input({text:'Ориг №',field:'fCredInv'}),col2,ind+=ls);
      
      priceTab.add( new Input({text:'Уровень напоминания',field:'fLastRemndr'}),col3,ind=10);
      priceTab.add( new Input({text:'Дата посл.напомин.',field:'fLastRemDate'}),col3,ind+=ls);
      priceTab.add( new Input({text:'Накопительная карта',field:'fLoyaltyCardNr'}),col3,ind+=ls);
      priceTab.add( new Input({text:'Прогр. лояльности',field:'fLCMLevel'}),col3,ind+=ls);
      priceTab.add( new Input({text:'Накопительные баллы',field:'fPoints'}),col3,ind+=ls);
      priceTab.add( new Input({text:'№ TREO',field:'fTREONr'}),col3,ind+=ls);
      
    })();
    //------------------------------ Invoices address TAB ----------------------------------
    const adrInvTab = new Tab({name:'Адрес сч/ф'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 650;
      let ls = 20;
      
      adrInvTab.add( new Input({text:'Город',field:'fInvAddr0',width:560}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'Улица',field:'fInvAddr1',width:560}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'Здание',field:'fInvAddr2',width:560}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'Почтовый индекс',field:'fInvAddr3',width:560}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'',field:'fInvAddr4',width:560}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'Страна',field:'fInvCountry'}),col1,ind+=ls);
      adrInvTab.add( new Input({text:'Банк',field:'fBankCode'}),col2,ind);
      
      let ind2=ind+ls;
      
      adrInvTab.add( new BlockLabel({text:'Статус утверждение'}),col1-80,ind=ind2);
      const acepRadio1 = new RadioButton({text:'не обязательно',value:1});
      const acepRadio2 = new RadioButton({text:'не начато',value:2});
      const acepRadio3 = new RadioButton({text:'не запрошено',value:3});
      const acepRadio4 = new RadioButton({text:'в ожидании',value:4});
      const acepRadio5 = new RadioButton({text:'утверждено',value:5});
      const acepRadio6 = new RadioButton({text:'отклонено',value:6});
      
      const acepGroup = new RadioButtonsGroup({
        buttons:[
          acepRadio1,
          acepRadio2,
          acepRadio3,
          acepRadio4,
          acepRadio5,
          acepRadio6
        ],
        field:'fAcceptanceStatus'
      });
      adrInvTab.add(acepRadio1,col1,ind+=ls);
      adrInvTab.add(acepRadio2,col1,ind+=ls);
      adrInvTab.add(acepRadio3,col1,ind+=ls);
      adrInvTab.add(acepRadio4,col1,ind+=ls);
      adrInvTab.add(acepRadio5,col1,ind+=ls);
      adrInvTab.add(acepRadio6,col1,ind+=ls);
      this.add(acepGroup);
      //todo:find field for NDS RadioButton
      adrInvTab.add( new BlockLabel({text:'НДС'}),col2-50,ind=ind2);
      const ndsRadio1 = new RadioButton({text:'Внутренний',value:1});
      const ndsRadio2 = new RadioButton({text:'в пределах ЕС',value:2});
      const ndsRadio3 = new RadioButton({text:'в пределах ЕС(НДС)',value:3});
      const ndsRadio4 = new RadioButton({text:'за пределами ЕС',value:4});
      const ndsRadio5 = new RadioButton({text:'за пределами ЕС(НДС)',value:5});
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
      adrInvTab.add(ndsRadio1,col2,ind+=ls);
      adrInvTab.add(ndsRadio2,col2,ind+=ls);
      adrInvTab.add(ndsRadio3,col2,ind+=ls);
      adrInvTab.add(ndsRadio4,col2,ind+=ls);
      adrInvTab.add(ndsRadio5,col2,ind+=ls);
      //this.add(ndsGroup);
      
      adrInvTab.add( new Input({text:'Регион',field:'fRegion'}),col3,ind=ind2);
      adrInvTab.add( new Input({text:'ИНН',field:'fVATNr'}),col3,ind+=ls);
      adrInvTab.add( new Input({text:'Рег.№1',field:'fRegNr1'}),col3,ind+=ls);
      adrInvTab.add( new Input({text:'GLN',field:'fRecipientGLN'}),col3,ind+=ls);
      adrInvTab.add( new Input({text:'Телефон',field:'fPhone'}),col3,ind+=ls);
      adrInvTab.add( new Input({text:'Факс',field:'fFax'}),col3,ind+=ls);
    })();
    //------------------------------ Delivery address TAB ----------------------------------
    const adrDelTab = new Tab({name:'Адрес дост.'});
    (()=>{
      let ind = 10;
      let col1 = 150;
      let col2 = 400;
      let col3 = 590;
      let ls = 20;
      
      adrDelTab.add( new Input({text:'Код адреса',field:'fDelAddrCode'}),col1,ind);
      adrDelTab.add( new Input({text:'Отгрузка',field:'fShipAddr0',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'Адрес',field:'fShipAddr1',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'',field:'fShipAddr2',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'',field:'fShipAddr3',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'',field:'fShipAddr4',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'',field:'fShipAddr5',width:500}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'Страна',field:'fDelCountry'}),col1,ind+=ls);
      adrDelTab.add( new Input({text:'GLN доставки',field:'fDelRecipientGLN'}),col3,ind);
      
    })();
    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      buttonWidth:65,
      tabs: [
        tmTab,
        itemsTab,
        curTab,
        condTab,
        idenTab,
        priceTab,
        adrInvTab,
        adrDelTab
      ]
    });
    this.add(stack, 5, headerHeight);
  }
};
