// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');

const windowWidth = 400;
const windowHeight = 150;
module.exports = class ElectronicInvoicesQueuesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Очередь электронных счёт-фактур',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'ElectronicInvoicesQueues';
    }

    async render() {
      let col1 = 100;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'№ записи',field:'fRecSerNr',width:120}),col1,ind);
      this.add( new Input({text:'Регистр',field:'fFileNameDesc',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment',width:260}),col1,ind+=ls);
    }
};
