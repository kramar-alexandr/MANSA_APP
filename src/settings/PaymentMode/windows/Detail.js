// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

module.exports = class PaymentModeDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Способ оплаты',
            width    : 500,
            height   : 300
        });
        this.datadef = 'PaymentMode';
        this.isSetting = true;
    }

    async render() {
      let col1 = 360;
      let col0 = 150;
      let ls = 20;
      let ind = 10;

      this.add(new Matrix({
        field: 'PaymentModeMatrix',
        width: this.width-20,
        height: this.height-60
      }), 10, 10);
      
    }
};
