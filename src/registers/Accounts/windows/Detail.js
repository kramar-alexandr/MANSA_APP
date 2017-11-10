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
const ConfirmWindow = require('erpjs/core/client/windows/ConfirmWindow.js');
const ContextWindow = require('../../../tools/ContextWindow');
const states = require('erpjs/core/client/windows/DetailStates.js');

module.exports = class AccDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = 460;
    this.height = 520;
    this.title = 'План счетов';
    this.datadef = 'Accounts';
    this.resizable = true;
    this.register = args.register;
    
  }

  async render() {
    const accNumberInput = new Input({
      width: 80,
      text: 'Счет',
      field: 'fAccNumber'
    });
    const commentInput = new Input({
      width: 100,
      text: 'Наименование',
      field: 'fComment'
    });
    const contextWindow = new ContextWindow({register:this.register});
    accNumberInput.on('ctrl+enter', ()=>{
      contextWindow.init(
        {
          datadef:"Accounts",
          fields:["fAccNumber","fAccType"],
          output:"fAccNumber"
        });
      contextWindow.onSelect = ({id})=>{
        accNumberInput.setValue(contextWindow.getOutput({id}));
        this.onChangeData({});
        contextWindow.close();
      }
      contextWindow.open();
    });
    
    this.add(accNumberInput, 95, 10);
    this.add(commentInput, 300, 10);
    
    
    
    //----------------View tab------------------------------------
    const viewTab = new Tab({
      name: 'ВИД'
    });
    
    const autCodeInput = new Input({
      text: 'Автопроводка',
      field: 'fAutCode'
    });
    autCodeInput.on('ctrl+enter',()=>{
      contextWindow.init(
        {
          datadef:"Items",
          fields:["fCode"],
          output:"fItemType"
        });
      contextWindow.onSelect = ({id})=>{
        accNumberInput.setValue(contextWindow.getOutput({id}));
        contextWindow.close();
      }
      contextWindow.open();
    });

    const vatCodeInput = new Input({
      text: 'Код НДС',
      field: 'fVatCode'
    });

    const curncyInput = new Input({
      text: 'Валюта',
      field: 'fCurncy'
    });

    const sruCodeInput = new Input({
      text: 'Код SRU',
      field: 'fSruCode'
    });

    const consAccNumberImput = new Input({
      text: 'Счет консолид.',
      field: 'fConsAccNumber'
    });

    const taxTemplateInput = new Input({
      text: 'Шабл. нал.',
      field: 'fTaxTemplateCode'
    });
    
    const periodCodeInput = new Input({
      text: 'Расход буд. период',
      field: 'fPeriodCode'
    });
    
    const tarnsAutInput = new Input({
      text: 'Автопроводка',
      field: 'fTransAutCode'
    });
    
    const activeRadio = new RadioButton({
        text: 'Актив',
        value:1
    });
    const pasiveRadio = new RadioButton({
        text: 'Пасив',
        value:2
    });
    
    const capRadio = new RadioButton({
        text: 'Капитал',
        value:3
    });
    
    const dohodRadio = new RadioButton({
        text: 'Доход',
        value:4
    });
    
    const rashodRadio = new RadioButton({
        text: 'Расход',
        value:5
    });
    const accTypeLabel = new BlockLabel({
        text: 'Вид счета'
    });
    
    const accTypeGroup = new RadioButtonsGroup({
      buttons:[
        activeRadio,
        pasiveRadio,
        capRadio,
        dohodRadio,
        rashodRadio
      ],
      field:'fAccType'
    });
    
    const checkLabel = new BlockLabel({
        text: 'Обычная запись по'
    });
    const debetCb = new Checkbox({
        text:      'дебету',
        field:      'fNvd',
        value: 1
    });
    const credetCb = new Checkbox({
        text:      'кредиту',
        field:      'fNvc',
        value: 1
    });
    const blockedCb = new Checkbox({
        text:      'закрыт',
        field:      'fBlockedFlag',
        value: 1
    });
    const groupAccCb = new Checkbox({
        text:      'Счет группы',
        field:      'fGroupAcc',
        value: 1
    });
    const consprCb = new Checkbox({
        text:      '% при консолидации',
        field:      'fConspr',
        value: 1
    });
    
    
    //inputs
    viewTab.add(autCodeInput, 95, 10);
    viewTab.add(vatCodeInput, 300, 10);
    viewTab.add(curncyInput, 95, 40);
    viewTab.add(sruCodeInput, 300, 40);
    viewTab.add(consAccNumberImput, 95, 70);
    viewTab.add(periodCodeInput, 300, 70);
    viewTab.add(taxTemplateInput, 95, 100);
    viewTab.add(tarnsAutInput, 300, 100);
    
    //radio buttons
    this.add(accTypeGroup);
    viewTab.add(accTypeLabel,95,130);
    viewTab.add(activeRadio,125,150);
    viewTab.add(pasiveRadio,125,165);
    viewTab.add(capRadio,125,180);
    viewTab.add(dohodRadio,125,195);
    viewTab.add(rashodRadio,125,210);
    
    //checkboxes
    viewTab.add(checkLabel,220,130);
    viewTab.add(debetCb,300,150);
    viewTab.add(credetCb,300,165);
    viewTab.add(blockedCb,300,195);
    viewTab.add(groupAccCb,300,210);
    viewTab.add(consprCb,300,225);
    //-----------------Text Tab--------------------------------

    const textTab = new Tab({
      name: 'ТЕКСТ'
    });
    
    const langMatrix = new Matrix({
      field: 'AccountsMatrix',
      width: 400,
      height: 340
    });
    
    textTab.add(langMatrix, 5, 13);
    //------------------ stack ---------------------------------
    const stack = new Stack({
      width: 420,
      height: 360,
      buttonWidth:100,
      tabs: [
        viewTab,
        textTab
      ]
    });
    this.add(stack, 15, 60);
    
  }
};
