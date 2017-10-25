// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RegisterDetailWindow = require('erpjs/core/client/windows/SettingDetailWindow');

const windowWidth = 450;
const windowHeight = 300;
module.exports = class ItemGroupWithholdingsDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Група товаров удержания',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'ItemGroupWithholdings';
    }

    async render() {
      let col0 = 15;
      let col1 = 150;
      let col2 = 350;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Группа товаров',field:'fCode'}),col1,ind);
      this.add( new Input({text:'Наименование',field:'fComment',width:280}),col1,ind+=ls);
      this.add( new Input({text:'Дата начала',field:'fComment'}),col1,ind+=ls);
      this.add(new Checkbox({text:'Закрыто',field:'fClosed',value:1}),col2,ind=10);
      this.add( new Input({text:'Дата окончания',field:'fComment'}),col2,ind+=ls*2);
      
      this.add(new Matrix({
        field: 'ItemGroupWithholdingsMatrix',
        width: windowWidth-40,
        height: windowHeight-100
      }), col0, ind+=ls*2);
    }
};
