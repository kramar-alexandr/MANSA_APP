// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');

const windowWidth = 400;
const windowHeight = 300;
module.exports = class TaxTemplatesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Шаблон расчета налога',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'TaxTemplates';
    }

    async render() {
      let col1 = 150;
      let col2 = 300;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Идентиф. нал.',field:'fTaxID',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Комментарий',field:'fComment',width:200}),col1,ind+=ls);
      this.add(new Checkbox({text:'Закрыт',field:'fClosed',value:1}),col1,ind+=ls);
      
      const taxMatrix = new Matrix({
        field: 'TaxTemplatesMatrix',
        width: 380,
        height: 200
      });
      this.add(taxMatrix, 10, 100);
    }
};
