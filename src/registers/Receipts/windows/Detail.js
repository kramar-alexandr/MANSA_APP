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


const windowsWidth = 780;
const windowsHeight = 520;
module.exports = class ReceiptsDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = windowsWidth;
    this.height = windowsHeight;
    this.title = 'Платеж клиента';
    this.datadef = 'Receipts';
    this.resizable = true;
  }

  async render() {
    
    let ind = 10;
    let col1 = 150;
    let col2 = 350;
    let col3 = 550;
    let col4 = 700;
    let ls = 20;
    
    this.add( new Input({text:'Сер.номер',field:'fSerNr'}),col1,ind);
    this.add( new Input({text:'Способ оплаты',field:'fPayMode'}),col1,ind+=ls);
    this.add( new Input({text:'Код авториз.',field:'fAuthorizationCode'}),col1,ind+=ls);
    this.add( new Input({text:'Дата опер.',field:'fTransDate'}),col2,ind=10);
    this.add( new Input({text:'Комментарий',field:'fComment',width:380}),col2,ind+=ls);
    this.add( new Input({text:'Ссылка',field:'fRecNumber',width:180}),col3,ind=10);

    this.add(new Checkbox({text:'Информация о клиенте в записи',field:'fARonTR',value:1}),col3,ind+=ls*2);
    this.add(new Checkbox({text:'ОК',field:'fOKFlag',value:1}),col4,ind);
    
    const langMatrix = new Matrix({
      field: 'fMathMatrix',
      width: windowsWidth-20,
      height: windowsHeight-200
    });
    this.add(langMatrix, 10, 80);
    
    this.add( new Input({text:'Валюта',field:'fPayCurCode'}),col3,windowsHeight-80);
    this.add( new Input({text:'Получено',field:'fCurPayVal'}),col4,windowsHeight-80);

  }
};
