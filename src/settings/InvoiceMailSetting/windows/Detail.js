// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

const windowWidth = 360;
const windowHeight = 200;
module.exports = class InvoiceMailSettingsDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Настройки сообщений сч/ф',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'InvoiceMailSetting';
        this.isSetting = true;
    }

    async render() {
      this.add( new Input({text:'Заголовок',field:'fHeader',width:220}),100,20);
      this.add( new Input({text:'Текст вначале',field:'fFirstTxt',width:120}),100,40);
      this.add( new Input({text:'Текст вконце',field:'fLastTxt',width:120}),100,60);
      this.add( new Input({text:'Отправитель',field:'fEmailSender',width:120}),100,80);
    }
};
