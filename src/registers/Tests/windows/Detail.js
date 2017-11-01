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

const Switch = require('erpjs/core/client/components/Switch');

module.exports = class TestDetailWindow extends RegisterDetailWindow {
  constructor(args: {
    register: Register,
    id ? : string
  }) {
    super(args);

    this.width = 460;
    this.height = 520;
    this.title = 'Test';
    this.datadef = 'Tests';
    this.resizable = true;
  }

  async render() {
    
    this.add(new Input({text: 'Name',field: 'name'}), 100, 20);
    this.add(new Input({text: 'Phone',field: 'phone'}), 100, 40);
    
    /*
    
    const switcher = new Switch({
        label   : 'switch',
        width   : 120,
        height  : 20,
        buttons:[
          new Tab('Hello')
        ],
        onClick : () => {
            console.log('switch');
        }
    });
    this.add(switcher,100,60);
    */

    
  }
};
