// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const RegisterDetailWindow = require('erpjs/core/client/windows/RegisterDetailWindow');
const Tab = require('erpjs/core/client/components/Tab');
const Stack = require('erpjs/core/client/components/Stack');
const Checkbox = require('erpjs/core/client/components/Checkbox');

const windowWidth = 450;
const windowHeight = 250;
module.exports = class ElectronicRecordStatusesDetailWindow extends RegisterDetailWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Статус электронной записи',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'ElectronicRecordStatuses';
    }

    async render() {
      let col1 = 110;
      let col2 = 300
      let ls = 20;
      let ind = 10;
      
      this.add( new Input({text:'Регистр',field:'fFileNameDesc'}),col1,ind);
      this.add( new Input({text:'Комментарий',field:'fComment',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Файл',field:'fFileName'}),col1,ind+=ls);
      this.add( new Input({text:'Статус',field:'fStatus'}),col1,ind+=ls);
      this.add( new Input({text:'Время создания',field:'fCreationTime'}),col1,ind+=ls);
      this.add( new Input({text:'ID базы данных',field:'fDBID'}),col1,ind+=ls);
      this.add( new Input({text:'ID компании',field:'fCompID',width:250}),col1,ind+=ls);
      this.add( new Input({text:'Получатель',field:'fTheirRecipient'}),col1,ind+=ls);
      this.add(new Checkbox({text:'Отправ.',field:'fSent',value:1}),col1,ind+=ls);
      
      this.add( new Input({text:'Номер',field:'fCustSerNr'}),col2,ind=10);
      this.add( new Input({text:'Сер.№',field:'fSerNr'}),col2,ind+=ls);
      this.add( new Input({text:'ID клиента',field:'fCustID'}),col2,ind+=ls);
      this.add( new Input({text:'Дата создания',field:'fCreationDate'}),col2,ind+=ls);
      this.add( new Input({text:'Отправ.',field:'fSent'}),col2,ind+=ls);
      this.add( new Input({text:'№ компании',field:'fCompNr'}),col2,ind+=ls);
      
    }
};
