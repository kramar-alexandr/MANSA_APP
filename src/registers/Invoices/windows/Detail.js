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
      
      this.add( new Input({text:'Номер',field:'fSerNr'}),col1,ind);
      this.add( new Input({text:'Клиент',field:'fCustCode'}),col1,ind+=ls);
      
      ind = 10;
      this.add( new Input({text:'Наим.',field:'fInvAddr0',width:300}),col2,ind);
      this.add( new Input({text:'Офиц. №',field:'fOfficialSerNr'}),col2,ind+=ls);
      this.add(new Checkbox({text:'ОК',field:'fOKFlag',value:1}),col3,ind);
      
    })();
    
    //----------------------------- stack ---------------------------------
    const stack = new Stack({
      width: windowWidth-10,
      height: windowHeight - headerHeight - 30,
      buttonWidth:65,
      tabs: [
        
      ]
    });
    this.add(stack, 5, headerHeight);
    
  }
};
