// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/SettingDetailWindow');

const windowWidth = 400;
const windowHeight = 150;
module.exports = class ItemClassificationsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Классификации товаров',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'ItemClassifications';
    }

    async render() {
      let col1 = 100;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Код',field:'fCode',width:120}),col1,ind);
      this.add( new Input({text:'Наименование',field:'fName',width:260}),col1,ind+=ls);
      this.add( new Input({text:'Тип',field:'fCType',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Классификаця',field:'fDispGroups',width:260}),col1,ind+=ls);
      this.add( new Input({text:'Цвет',field:'fColnr',width:120}),col1,ind+=ls);
    }
};
