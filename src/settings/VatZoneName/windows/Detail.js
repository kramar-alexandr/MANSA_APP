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
module.exports = class VatZoneNameDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Название региона НДС',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'VatZoneName';
        this.isSetting = true;
    }

    async render() {
      this.add( new Input({text:'Регион НДС',field:'fVATZoneName',width:120}),100,30);
    }
};
