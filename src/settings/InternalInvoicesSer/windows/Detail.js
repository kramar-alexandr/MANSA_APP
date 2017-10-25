// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/SettingDetailWindow');

const windowWidth = 420;
const windowHeight = 300;
module.exports = class InternalInvoicesSerDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Серии номеров - внутренние счета-фактуры',
            width    : windowWidth,
            height   : windowHeight
        });

        this.datadef = 'InternalInvoicesSer';
    }

    async render() {
      
      this.add(new Matrix({
        field: 'InternalInvoicesSerMatrix',
        width: windowWidth-20,
        height: windowHeight-20
      }), 10, 10);
    }
};
