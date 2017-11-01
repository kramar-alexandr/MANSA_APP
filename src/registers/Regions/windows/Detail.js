// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

const windowWidth = 400;
const windowHeight = 150;
module.exports = class RegionsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Регион',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'Regions';
    }

    async render() {
      let col1 = 150;
      let col2 = 300;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Регион',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Название',field:'fComment',width:200}),col1,ind+=ls);
      this.add( new Input({text:'Счёт регион.нал.',field:'fRPCUTAXAcc',width:120}),col1,ind+=ls);
      this.add(new Checkbox({text:'Фиксированный курс взыскиваемых рег.налогов',field:'fFixedRPCUTax',value:1}),col2,ind+=ls);
      this.add(new Checkbox({text:'Фиксированный курс удержания',field:'fFixedWHVE',value:1}),col2,ind+=ls);
    }
};
