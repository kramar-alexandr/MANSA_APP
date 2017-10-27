// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

const windowWidth = 300;
const windowHeight = 120;
module.exports = class EnvironmentTaxDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Налог на окруж. среду',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'EnvironmentTax';
        this.isSetting = true;
    }

    async render() {
      this.add( new Input({text:'Товар нал.на окр.среду',field:'fRepaItem',width:120}),160,30);
    }
};
