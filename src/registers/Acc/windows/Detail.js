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

module.exports = class AccDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = 460;
    this.height = 520;
    this.title = 'План счетов';
    this.datadef = 'Acc';
    this.resizable = true;
  }

  async render() {
    const accNumberInput = new Input({
      width: 60,
      fontSize: 16,
      height: 20,
      text: 'Счет',
      field: 'acc_number'
    });

    const commentInput = new Input({
      text: 'Naimenovanie',
      field: 'comment'
    });

    const autCodeInput = new Input({
      text: 'Автопроводка',
      field: 'aut_code'
    });

    const vatCodeInput = new Input({
      text: 'Код НДС',
      field: 'vat_code'
    });

    const curncyInput = new Input({
      text: 'Валюта',
      field: 'curncy'
    });

    const sruCodeInput = new Input({
      text: 'Код SRU',
      field: 'sru_code'
    });

    const consAccNumberImput = new Input({
      text: 'Счет консолид.',
      field: 'cons_acc_number'
    });

    const periodCodeInput = new Input({
      text: 'Расход буд. период',
      field: 'period_code'
    });

    const blockCheckBox = new Checkbox({
      text: 'Блокировка',
      field: 'blocked_flag',
      value:1
    });
    
    const rA = new RadioButton({
      text: 'A value', // require
      width: 15, // default 120
      height: 15, // default 20
    });

    const rB = new RadioButton({
      text: 'B value',
      width: 15,
      height: 15
    });

    const radioGroup = new RadioButtonsGroup({
      buttons: [rA, rB],
      field: 'objects'
    });
    

    this.add(accNumberInput, 105, 10);
    this.add(commentInput, 335, 10);
    this.add(blockCheckBox, 105, 40);
    
    this.add(rA, 335, 40);
    this.add(rB, 335, 70);

    const header = new Header({
      title: 'Hello',
      subtitle: 'World',
      showCloseButton: true
    });


    const viewTab = new Tab({
      name: 'ВИД'
    });

    viewTab.add(autCodeInput, 105, 20);
    viewTab.add(vatCodeInput, 335, 20);
    viewTab.add(curncyInput, 105, 60);
    viewTab.add(sruCodeInput, 335, 60);
    viewTab.add(consAccNumberImput, 105, 100);
    viewTab.add(periodCodeInput, 335, 100);

    const textTab = new Tab({
      name: 'ТЕКСТ'
    });

    const stack = new Stack({
      width: 420,
      height: 360,
      tabs: [
        viewTab,
        textTab
      ]
    });

    const langMatrix = new Matrix({
      field: 'lang_matrix',
      width: 400,
      height: 340
    });
    
    textTab.add(langMatrix, 0, 13);

    this.add(stack, 10, 140);

  }
};
