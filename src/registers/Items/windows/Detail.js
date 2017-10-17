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


const windowWidth = 650;
const windowHeight = 500;
const headerHeight = 80;

module.exports = class ItemsDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowWidth;
    this.height = windowHeight;
    this.title = 'Товары';
    this.datadef = 'Items';
    this.resizable = true;
  }

  async render() {
    //-----------------------Header----------------------------------------
    (()=>{
      let firstColumn = 150;
      let secondColumn = 390;
      let indent = 10;
      
      this.add( new Input({text:'Код товара',field:'fCode'}),firstColumn,indent);
      this.add( new Input({text:'Наименование',field:'fName', width:300}),firstColumn,indent+20);
      this.add( new Input({text:'Группа',field:'fGroup'}),secondColumn,indent);
      this.add(new Checkbox({
        text:'Закрыт',
        field:'fTerminated',
        value:1
      }),firstColumn,indent+40);
      this.add(new Checkbox({
        text:'Не для продаж',
        field:'fNotForSales',
        value:1
      }),secondColumn,indent+40);
    })();
    
    //-------------------------Price tab------------------------------------
    const priceTab = new Tab({ name: 'Цена' });
    (()=>{
      
      let indent = 10;
      let firstColumn = 150;
      let secondColumn = 400;
      
      priceTab.add( new Input({text:'Единица измерения',field:'fUnittext'}),firstColumn,indent);
      priceTab.add( new Input({text:'Базовая цена',field:'fUPrice1'}),firstColumn,indent + 20);
      priceTab.add( new Input({text:'Изменение баз. цены',field:'fLastBasePriceChange'}),firstColumn,indent + 40);
      priceTab.add( new Input({text:'Фактор цены',field:'fPriceFactor'}),firstColumn,indent + 60);
      priceTab.add( new Input({text:'Наценка, %',field:'fMarkup'}),firstColumn,indent + 80);
      priceTab.add( new Input({text:'% премии',field:'fBonus'}),firstColumn,indent + 100);
      priceTab.add( new Input({text:'Объекты',field:'fObjects',width:240 }),firstColumn,indent + 120);
      priceTab.add( new Input({text:'Классификации',field:'fDispGroups', width:240 }),firstColumn,indent + 140);
      
      priceTab.add( new BlockLabel({text:'Тип товара'}),secondColumn,indent);

      const freeRadio = new RadioButton({
          text: 'Свободный',
          value:1
      });
      const stockedRadio = new RadioButton({
          text: 'Складируемый',
          value:2
      });
      const structuredRadio = new RadioButton({
          text: 'Структурирован.',
          value:3
      });
      const jobRadio = new RadioButton({
          text: 'Работа',
          value:4
      });
      const itemTypeGroup = new RadioButtonsGroup({
        buttons:[
          freeRadio,
          stockedRadio,
          structuredRadio,
          jobRadio
        ],
        field:'fItemType'
      });
      priceTab.add(freeRadio,secondColumn + 50, indent + 20);
      priceTab.add(stockedRadio,secondColumn + 50, indent + 40);
      priceTab.add(structuredRadio,secondColumn + 50, indent + 60);
      priceTab.add(jobRadio,secondColumn + 50, indent + 80);
      this.add(itemTypeGroup);
      priceTab.add(new Checkbox({
        text:'В проекте товар как материал',
        field:'fItemMaterial',
        value:1
      }),secondColumn + 50,indent + 100);
    })();
    //---------------------------- Stock Tab ------------------------------
    const stockTab = new Tab({ name : 'Склад'});
    (()=>{
      let indent = 10;
      let firstColumn = 150;
      let secondColumn = 350;
      let thirdColumn = 550;
      
      stockTab.add( new Input({text:'Мин. кол-во на скл.',field:'fMinLevel'}),firstColumn,indent);
      stockTab.add( new Input({text:'Макс. кол-во на скл.',field:'fMaxLevel'}),firstColumn,indent+20);
      stockTab.add( new Input({text:'Отдел',field:'fDepartment'}),firstColumn,indent+40);
      stockTab.add( new Input({text:'Полка',field:'fInvCode'}),firstColumn,indent+60);
      stockTab.add( new Input({text:'Источник по умолч.',field:'fDefaultSource'}),firstColumn,indent+80);
      stockTab.add( new Input({text:'Степень риска',field:'fHazLevCode'}),firstColumn,indent+100);
      stockTab.add( new Input({text:'Единица 2',field:'fUnittext2'}),firstColumn,indent+120);
      stockTab.add( new Input({text:'Коеф. единицы',field:'fUnitCoefficient'}),firstColumn,indent+140);
      
      stockTab.add( new BlockLabel({text:'Серийные номера'}),secondColumn-60,indent);
      const noRadio = new RadioButton({
          text: 'нет',
          value:1
      });
      const unitRadio = new RadioButton({
          text: 'на единицу',
          value:2
      });
      const partRadio = new RadioButton({
          text: 'на партию',
          value:3
      });
      const serGroup = new RadioButtonsGroup({
        buttons:[
          noRadio,
          unitRadio,
          partRadio
        ],
        field:'fSerNrf'
      });
      stockTab.add(noRadio,secondColumn,indent+20);
      stockTab.add(unitRadio,secondColumn,indent+40);
      stockTab.add(partRadio,secondColumn,indent+60);
      this.add(serGroup);
      
      stockTab.add( new Input({text:'Налог на окр. среду/кг',field:'fRepaPricePerWeight'}),secondColumn,indent+80);
      stockTab.add( new Input({text:'% алкоголя',field:'fAlcPrc'}),secondColumn,indent+100);
      stockTab.add( new Input({text:'Конвертация 1',field:'fConversion1'}),secondColumn,indent+120);
      stockTab.add( new Input({text:'Конвертация 2',field:'fConversion2'}),secondColumn,indent+140);
      
      stockTab.add(new Checkbox({
        text:'Не требовать ном.парт.на сч/ф',
        field:'fDonotRequireBatchNrOnIVCash',
        value:1
      }),thirdColumn+50,indent+40);
      stockTab.add( new Input({text:'Основной тип заказа',field:'fDefOrderType'}),thirdColumn,indent+60);
    
    })();
    //---------------------------- Stock Tab ------------------------------
    const manageTab = new Tab({ name : 'Упр.складом'});
    (()=>{
      let indent = 10;
      let firstColumn = 150;
      let secondColumn = 350;
      let thirdColumn = 550;
      
      manageTab.add( new Input({text:'Товар паллеты',field:'fDefPalletItem',width:100}),firstColumn,indent);
      manageTab.add( new Input({text:'Участ.скл.по умолч.',field:'fLocArea',width:100}),firstColumn,indent+20);
      manageTab.add( new Input({text:'Участок погрузки',field:'fPickArea',width:100}),secondColumn+100,indent);
      manageTab.add( new Input({text:'Паллет на погрузке',field:'fPalletsInPickArea',width:100}),secondColumn+100,indent+20);
      
      manageTab.add( new Input({text:'Макс.кол.на паллеты',field:'fQtyonPallet'}),firstColumn,indent+40);
      manageTab.add( new Input({text:'Ширина паллеты',field:'fPalletWidth'}),firstColumn,indent+60);
      manageTab.add( new Input({text:'Шир.места по умолч.',field:'fDefPosWidth'}),firstColumn,indent+80);
      manageTab.add( new Input({text:'Ширина',field:'fWidth'}),firstColumn,indent+100);
      manageTab.add( new Input({text:'Объем',field:'fVolume'}),firstColumn,indent+120);
      
      manageTab.add( new Input({text:'Слои в палл.',field:'fPalletLayers'}),secondColumn,indent+40);
      manageTab.add( new Input({text:'Высота',field:'fPalletHeight'}),secondColumn,indent+60);
      manageTab.add( new Input({text:'Высота',field:'fDefPosHeight'}),secondColumn,indent+80);
      manageTab.add( new Input({text:'Высота',field:'fHeight'}),secondColumn,indent+100);
      manageTab.add( new Input({text:'Плотность',field:'fDensity'}),secondColumn,indent+120);
      
      manageTab.add( new Input({text:'Кол-во в слое',field:'fQtyonPalletLayer'}),thirdColumn,indent+40);
      manageTab.add( new Input({text:'Глубина',field:'fPalletDepth'}),thirdColumn,indent+60);
      manageTab.add( new Input({text:'Глубина',field:'fDefPosDepth'}),thirdColumn,indent+80);
      manageTab.add( new Input({text:'Глубина',field:'fDepth'}),thirdColumn,indent+100);
      manageTab.add( new Input({text:'Нетто',field:'fNetWeight'}),thirdColumn,indent+120);
      manageTab.add( new Input({text:'Вес',field:'fWeight'}),thirdColumn,indent+140);
    })();
    //---------------------------- Cost Tab -------------------------------
    const costTab = new Tab({name:'Стоимость'});
    (()=>{
      let indent = 10;
      let firstColumn = 150;
      let secondColumn = 360;
      let thirdColumn = 550;
      
      costTab.add(new Input({text:'Стоимость',field:'fInPrice'}),firstColumn,indent);
      costTab.add(new Input({text:'Стоим.в осн.вал.2',field:'fInPriceB2'}),firstColumn,indent+20);
      costTab.add(new Input({text:'Накладные расходы',field:'fExtraCost'}),firstColumn,indent+40);
      costTab.add(new Input({text:'Средневзвешенная',field:'fWeighedAvPrice'}),firstColumn,indent+60);
      costTab.add(new Input({text:'Средневзв.в осн.вал.2',field:'fWeighedAvPriceB2'}),firstColumn,indent+80);
      costTab.add(new Input({text:'Посл.покуп.(вкл.накл.)',field:'fLastPurchPrice'}),firstColumn,indent+100);
      costTab.add(new Input({text:'Посл.покуп.(иск.накл.)',field:'fLastPurchPrice2'}),firstColumn,indent+120);
      costTab.add(new Input({text:'Валюта посл.покупки',field:'fLastPurchCurncyCode'}),firstColumn,indent+140);
      costTab.add(new Input({text:'Фикс.фрахт',field:'fFixedFreight'}),firstColumn,indent+160);
      
      costTab.add(new Input({text:'Изменение стоимости',field:'fLastPriceChange'}),secondColumn,indent);
      costTab.add( new BlockLabel({text:'Обновл.стоим.по поступл.'}),secondColumn-100,indent+20);
      const UpdateCostRadio1 = new RadioButton({text:'не изменять',value:1});
      const UpdateCostRadio2 = new RadioButton({text:'на ст-ть посл.покупки,вкл.накл.з.',value:2});
      const UpdateCostRadio3 = new RadioButton({text:'на средневзвешенную',value:3});
      const UpdateCostRadio4 = new RadioButton({text:'на цену посл.покупки,искл.накл.з.',value:4});
      const upCostGroup = new RadioButtonsGroup({
        buttons:[
          UpdateCostRadio1,
          UpdateCostRadio2,
          UpdateCostRadio3,
          UpdateCostRadio4
        ],
        field:'fUpdateCost'
      });
      costTab.add(UpdateCostRadio1,secondColumn+50,indent+40);
      costTab.add(UpdateCostRadio2,secondColumn+50,indent+60);
      costTab.add(UpdateCostRadio3,secondColumn+50,indent+80);
      costTab.add(UpdateCostRadio4,secondColumn+50,indent+100);
      this.add(upCostGroup);
      
      costTab.add(new Checkbox({
        text:'Включать фикс. сбор на товар',
        field:'fInclItemFreight',
        value:1
      }),secondColumn+50,indent+140);
      
      costTab.add( new BlockLabel({text:'Обновл.стоим.по переоц.'}),thirdColumn-80,indent);
      const UpdateSruRadio1 = new RadioButton({text:'не обновлять',value:1});
      const UpdateSruRadio2 = new RadioButton({text:'стоимость посл. переоценки',value:2});
      const UpdateSruRadio3 = new RadioButton({text:'средневзвешенная',value:3});
      const sruCostGroup = new RadioButtonsGroup({
        buttons:[
          UpdateCostRadio1,
          UpdateCostRadio2,
          UpdateCostRadio3,
          UpdateCostRadio4
        ],
        field:'fSRUpdateCost'
      });
      costTab.add(UpdateSruRadio1,thirdColumn+50,indent+20);
      costTab.add(UpdateSruRadio2,thirdColumn+50,indent+40);
      costTab.add(UpdateSruRadio3,thirdColumn+50,indent+60);
      this.add(sruCostGroup);
      
      costTab.add(new Checkbox({
        text:'С акцизом',
        field:'fHasExcise',
        value:1
      }),thirdColumn+50,indent+140);
    })();
    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      tabs: [
        priceTab,
        stockTab,
        manageTab,
        costTab
      ]
    });
    this.add(stack, 5, headerHeight);
    
  }
};
