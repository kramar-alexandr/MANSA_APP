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



const windowWidth = 650;
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
      const self = this;
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
        let secondColumn = firstColumn + 210;
        let thirdColumn = secondColumn + 200;
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
        
        const watCodeDomInput = new Input({
         width:80,
         text: 'Код НДС',
         field: 'fVATCodeDom'
        });
        const watCodeEUInput = new Input({
         width:80,
         text: 'EC Код НДС',
         field: 'fVATCodeEU'
        });
        const watCodeExpInput = new Input({
         width:80,
         text: 'Код НДС,экспорт',
         field: 'fVATCodeExp'
        });
        const purchAccInput = new Input({
         width:80,
         text: 'Контр.счёт покупок',
         field: 'fPurchAcc'
        });
        const euPurchAccInput = new Input({
         width:80,
         text: 'ЕС Контр.счёт',
         field: 'fEUPurchAcc'
        });
        const expPurchAccInput = new Input({
         width:80,
         text: 'Контр.счёт импорта',
         field: 'fExpPurchAcc'
        });
        const invAccInput = new Input({
         width:80,
         text: 'Счёт склада',
         field: 'fInvAcc'
        });
        const priceVarAccInput = new Input({
         width:80,
         text: 'Счёт разниц цен пок.',
         field: 'fPriceVarianceAcc'
        });
        const usageVarAccInput = new Input({
         width:80,
         text: 'Счёт исп. разниц',
         field: 'fUsageVarianceAcc'
        });
        const discountAccInput = new Input({
         width:80,
         text: 'Счёт для учета скид.',
         field: 'fDiscountAcc'
        });
        const projMatUsageInput = new Input({
         width:80,
         text: 'Счёт исп.проектн.мат.',
         field: 'fProjMaterialsUsageAcc'
        });
        
        const taxTempCodeInput = new Input({
         width:80,
         text: 'Шабл.нал.',
         field: 'fTaxTemplateCode'
        });
        const taxTempCodeEUInput = new Input({
         width:80,
         text: 'ЕС шабл.нал.',
         field: 'fTaxTemplateCodeEU'
        });
        const taxTempCodeExpInput = new Input({
         width:80,
         text: 'Экспорт шабл.нал.',
         field: 'fTaxTemplateCodeExp'
        });
        const objectsInput = new Input({
         width:80,
         text: 'Объекты',
         field: 'fObjects'
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
        
        accTab.add(watCodeDomInput,secondColumn,indent);
        accTab.add(watCodeEUInput,secondColumn,indent+20);
        accTab.add(watCodeExpInput,secondColumn,indent+40);
        accTab.add(purchAccInput,secondColumn,indent+60);
        accTab.add(euPurchAccInput,secondColumn,indent+80);
        accTab.add(expPurchAccInput,secondColumn,indent+100);
        accTab.add(invAccInput,secondColumn,indent+120);
        accTab.add(priceVarAccInput,secondColumn,indent+140);
        accTab.add(usageVarAccInput,secondColumn,indent+160);
        accTab.add(discountAccInput,secondColumn,indent+180);
        accTab.add(projMatUsageInput,secondColumn,indent+200);
        
        accTab.add(taxTempCodeInput,thirdColumn,indent);
        accTab.add(taxTempCodeEUInput,thirdColumn,indent+20);
        accTab.add(taxTempCodeExpInput,thirdColumn,indent+40);
        accTab.add(objectsInput,thirdColumn,indent+80);
        
      })();
      
      //---------------------------Credit Tab ----------------------------------
      const creditTab = new Tab({ name: 'Кред.и Серв.счета'});
      (()=>{
        let indent = 10;
        let indent2 = 90;
        let firstColumn = 180;
        let secondColumn = 440;
        const notesLabel = new BlockLabel({
            text: 'Кредит-ноты'
        });
        const csalesAccInput = new Input({
          width: 80,
          text: 'Счёт реализации',
          field: 'fCredSalesAcc'
        });
        
        const ceuSalesAccInput = new Input({
          width: 80,
          text: 'ЕС счёт реализации',
          field: 'fCredEUSalesAcc'
        });
        const cexpSalesAccInput = new Input({
         width:80,
         text: 'Счёт реализации,эксп.',
         field: 'fCredExpSalesAcc'
        });
        const cwatCodeDomInput = new Input({
         width:80,
         text: 'Код НДС',
         field: 'fCredVATCodeDom'
        });
        const cwatCodeEUInput = new Input({
         width:80,
         text: 'EC Код НДС',
         field: 'fCredVATCodeEU'
        });
        const cwatCodeExpInput = new Input({
         width:80,
         text: 'Код НДС,экспорт',
         field: 'fCredVATCodeExp'
        });
        const svoInvSalesInput = new Input({
         width:80,
         text: 'Серв. фактур счет реализ.',
         field: 'fSVOInvbleSalesAcc'
        });
        const svoWarranSalesInput = new Input({
         width:80,
         text: 'Серв. гарантия счет реализ.',
         field: 'fSVOWarrantySalesAcc'
        });
        const svoContractSalesInput = new Input({
         width:80,
         text: 'Серв. контракт счет реализ.',
         field: 'fSVOContractSalesAcc'
        });
        const svoGoodWilSalesInput = new Input({
         width:80,
         text: 'Серв. гудвил счет реализ.',
         field: 'fSVOGoodwillSalesAcc'
        });
        
        const svoInvCostInput = new Input({
         width:80,
         text: 'Серв. фактур счет затрат',
         field: 'fSVOInvbleCostAcc'
        });
        const svoWarranCostInput = new Input({
         width:80,
         text: 'Серв. гарантии счет затрат',
         field: 'fSVOWarrantyCostAcc'
        });
        const svoContractCostInput = new Input({
         width:80,
         text: 'Серв. контракт счет затрат',
         field: 'fSVOContractCostAcc'
        });
        const svoGoodWilCostInput = new Input({
         width:80,
         text: 'Серв. гудвил счет затрат',
         field: 'fSVOGoodwillCostAcc'
        });
        
        creditTab.add(notesLabel,windowWidth/2-50,indent);
        creditTab.add(csalesAccInput,firstColumn,indent+20);
        creditTab.add(ceuSalesAccInput,firstColumn,indent+40);
        creditTab.add(cexpSalesAccInput,firstColumn,indent+60);
        creditTab.add(cwatCodeDomInput,secondColumn,indent+20);
        creditTab.add(cwatCodeEUInput,secondColumn,indent+40);
        creditTab.add(cwatCodeExpInput,secondColumn,indent+60);
        
        creditTab.add(svoInvSalesInput,firstColumn,indent2+20);
        creditTab.add(svoWarranSalesInput,firstColumn,indent2+40);
        creditTab.add(svoContractSalesInput,firstColumn,indent2+60);
        creditTab.add(svoGoodWilSalesInput,firstColumn,indent2+80);
        creditTab.add(svoInvCostInput,secondColumn,indent2+20);
        creditTab.add(svoWarranCostInput,secondColumn,indent2+40);
        creditTab.add(svoContractCostInput,secondColumn,indent2+60);
        creditTab.add(svoGoodWilCostInput,secondColumn,indent2+80);
      })();
      
      //--------------------------Model TAB --------------------------------------
      const modelTab = new Tab({ name: 'Модель стоимос.'});
      ((selfObj)=>{
        let indent = 10;
        let firstColumn = 220;
        let secondColumn = 500;
        
        const firstModelLabel = new BlockLabel({
            text: 'Первичная модель стоимости'
        });
        const firstDefaultRadio = new RadioButton({
            text: 'По умолчанию',
            value:1
        });
        const firstCostRadio = new RadioButton({
            text: 'Стоимость покупки',
            value:2
        });
        const firstPrcRadio = new RadioButton({
            text: '% от базовой цены',
            value:3
        });
        const firstMidleRadio = new RadioButton({
            text: 'Средневзвешенная',
            value:4
        });
        const firstLineRadio = new RadioButton({
            text: 'По очереди',
            value:5
        });
        const firstNoRadio = new RadioButton({
            text: 'Нет',
            value:6
        });
        const firstModelGroup = new RadioButtonsGroup({
          buttons:[
            firstDefaultRadio,
            firstCostRadio,
            firstPrcRadio,
            firstMidleRadio,
            firstLineRadio,
            firstNoRadio
          ],
          field:'fPrimaryCostModel'
        });
        //----------------------------------------------
        const lineModelLabel = new BlockLabel({
            text: 'Модель стоимости по очереди'
        });
        const lineDefRadio = new RadioButton({
            text: 'По умолчанию',
            value:1
        });
        const fifoLineRadio = new RadioButton({
            text: 'FIFO цена',
            value:2
        });
        const lifoLineRadio = new RadioButton({
            text: 'LIFO цена',
            value:3
        });
        const lineModelGroup = new RadioButtonsGroup({
          buttons:[
            lineDefRadio,
            fifoLineRadio,
            lifoLineRadio
          ],
          field:'fQueuedCostModel'
        });
        //---------------------------------------------
        const serModelLabel = new BlockLabel({
            text: 'Стоимость на серийный номер'
        });
        const serNoRadio = new RadioButton({
            text: 'Стоимость не на серийный номер',
            value:2
        });
        const serYesRadio = new RadioButton({
            text: 'Стоимость на серийный номер',
            value:3
        });
        const serDefRadio = new RadioButton({
            text: 'По умолчанию',
            value:1
        });
        const serModelGroup = new RadioButtonsGroup({
          buttons:[
            serDefRadio,
            serYesRadio,
            serNoRadio
          ],
          field:'fFIFOPerSerialNr'
        });
        //------------------------------------------
        const costModelLabel = new BlockLabel({
            text: 'Стоимость по складам'
        });
        const cosDefRadio = new RadioButton({
            text: 'По умолчанию',
            value:1
        });
        const cosNoRadio = new RadioButton({
            text: 'Сто-ть по очереди не по скл.',
            value:2
        });
        const cosYesRadio = new RadioButton({
            text: 'Сто-ть по очереди по кажд.скл.',
            value:3
        });
        const cosModelGroup = new RadioButtonsGroup({
          buttons:[
            cosDefRadio,
            cosNoRadio,
            cosYesRadio
          ],
          field:'fFIFOPerLocation'
        });
        //------------------------------------------
        const midModelLabel = new BlockLabel({
            text: 'Средневзвешенная по складам'
        });
        const midDefRadio = new RadioButton({
            text: 'По умолчанию',
            value:1
        });
        const midNoRadio = new RadioButton({
            text: 'Средневзвешенная не по скл.',
            value:2
        });
        const midYesRadio = new RadioButton({
            text: 'Средневзвешенная по кажд.скл.',
            value:3
        });
        const midModelGroup = new RadioButtonsGroup({
          buttons:[
            midDefRadio,
            midNoRadio,
            midYesRadio
          ],
          field:'fWAPerLocation'
        });
        
        selfObj.add(firstModelGroup);
        modelTab.add(firstModelLabel,windowWidth/4-50,indent);
        modelTab.add(firstDefaultRadio,firstColumn,indent+20);
        modelTab.add(firstCostRadio,firstColumn,indent+40);
        modelTab.add(firstPrcRadio,firstColumn,indent+60);
        modelTab.add(firstMidleRadio,firstColumn,indent+80);
        modelTab.add(firstLineRadio,firstColumn,indent+100);
        modelTab.add(firstNoRadio,firstColumn,indent+120);
        
        modelTab.add(lineModelLabel,windowWidth/4-50,indent+160);
        selfObj.add(lineModelGroup);
        modelTab.add(lineDefRadio,firstColumn,indent+180);
        modelTab.add(fifoLineRadio,firstColumn,indent+200);
        modelTab.add(lifoLineRadio,firstColumn,indent+220);
        
        modelTab.add(serModelLabel,windowWidth/4*3-100,indent);
        selfObj.add(serModelGroup);
        modelTab.add(serDefRadio,secondColumn,indent+20);
        modelTab.add(serNoRadio,secondColumn,indent+40);
        modelTab.add(serYesRadio,secondColumn,indent+60);
        
        modelTab.add(costModelLabel,windowWidth/4*3-100,indent+100);
        selfObj.add(cosModelGroup);
        modelTab.add(cosDefRadio,secondColumn,indent+120);
        modelTab.add(cosNoRadio,secondColumn,indent+140);
        modelTab.add(cosYesRadio,secondColumn,indent+160);
        
        modelTab.add(midModelLabel,windowWidth/4*3-100,indent+200);
        selfObj.add(midModelGroup);
        modelTab.add(midDefRadio,secondColumn,indent+220);
        modelTab.add(midNoRadio,secondColumn,indent+240);
        modelTab.add(midYesRadio,secondColumn,indent+260);
        
      })(self);
      
      //----------------------------------Fraht Tab -----------------------------
      const frahTab = new Tab({ name: 'Фрахт'});
      ((selfObj)=>{
        let indent = 10;
        let firstColumn = 240;
        let secondColumn = 500;
        
        const noPrintCb = new Checkbox({
            text:      'Не печатать этикетки фрахта для этой гр.',
            field:      'fExclFrLabPr',
            value: 1
        });
        const fixCb = new Checkbox({
            text:      'Включать фикс. сбор за товар',
            field:      'fInclItemFreight',
            value: 1
        });
        const codexInput = new Input({
          width: 80,
          text: 'Код производительности',
          field: 'fEUCodex'
        });
        const cpsfInput = new Input({
          width: 80,
          text: 'Классификация',
          field: 'fCPSCode'
        });
        const typelLabel = new BlockLabel({
            text: 'Тип'
        });
        const normalRadio = new RadioButton({
            text: 'Обычный',
            value:1
        });
        const transRadio = new RadioButton({
            text: 'Транспорт',
            value:2
        });
        const taraRadio = new RadioButton({
            text: 'Тара',
            value:3
        });
        const typeFrahGroup = new RadioButtonsGroup({
          buttons:[
            normalRadio,
            transRadio,
            taraRadio
          ],
          field:'fType'
        });
        
        frahTab.add(noPrintCb,firstColumn,indent);
        frahTab.add(fixCb,firstColumn,indent+20);
        frahTab.add(codexInput,firstColumn,indent+40);
        frahTab.add(cpsfInput,firstColumn,indent+60);
        
        frahTab.add(typelLabel,secondColumn,indent);
        frahTab.add(normalRadio,secondColumn,indent+20);
        frahTab.add(transRadio,secondColumn,indent+40);
        frahTab.add(taraRadio,secondColumn,indent+60);
      })(self);
      //-----------------Text Tab--------------------------------

      const textTab = new Tab({
        name: 'Текст'
      });
      
      const langMatrix = new Matrix({
        field: 'fMathMatrix',
        width: windowWidth-20,
        height: stackHeight-20
      });
      
      textTab.add(langMatrix, 10, 10);
      
      //----------------------------------Final Stack --------------------------
      const stack = new Stack({
        width: windowWidth-10,
        height: stackHeight,
        buttonWidth: 100,
        tabs: [
          accTab,
          creditTab,
          modelTab,
          frahTab,
          textTab
        ]
      });
      this.add(stack, 5, headerHeight+10);
    }
};