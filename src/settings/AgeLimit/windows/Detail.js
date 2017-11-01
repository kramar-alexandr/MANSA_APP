// @flow

const Register = require('erpjs/core/client/Register');
const Input = require('erpjs/core/client/components/Input');
const Matrix = require('erpjs/core/client/components/Matrix');
const SettingWindow = require('../../../tools/SettingWindow');
const Checkbox = require('erpjs/core/client/components/Checkbox');
const RadioButton = require('erpjs/core/client/components/RadioButton');
const RadioButtonsGroup = require('erpjs/core/client/components/RadioButtonsGroup');
const BlockLabel = require('erpjs/core/client/components/BlockLabel');

const windowWidth = 420;
const windowHeight = 400;
module.exports = class AgeLimitsMatrixDetailWindow extends SettingWindow {
    constructor(args:{register: Register, id?:string}) {
        super({
            register : args.register,
            id       : args.id,
            state    : args.state,
            title    : 'Лимит задолжености',
            width    : windowWidth,
            height   : windowHeight
        });
        this.datadef = 'AgeLimit';
        this.isSetting = true;
    }

    async render() {
      let col1 = 220;
      let col2 = 320;
      let col0 = 15;
      let ls = 20;
      let ind = 10;
      this.add( new Input({text:'Период 1',field:'fPer1',width:120}),col1,ind);
      this.add( new Input({text:'Период 2',field:'fPer2',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Период 3',field:'fPer3',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Период 4',field:'fPer4',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Период 5',field:'fPer5',width:120}),col1,ind+=ls);
      this.add( new Input({text:'Период 6',field:'fPer6',width:120}),col1,ind+=ls);
      this.add( new BlockLabel({text:'При задании более 2-х периодов распечатывайте отчет в альбомном формате'}),col0,ind+=ls*2);
      this.add( new BlockLabel({text:'Показывать дни задержки'}),col1,ind+=ls*2);
      const dayRadio1 = new RadioButton({text:'Открытые и просрочен.',value:1});
      const dayRadio2 = new RadioButton({text:'Только просроченые',value:2});
      const dayGroup = new RadioButtonsGroup({
        buttons:[
          dayRadio1,
          dayRadio2
        ],
        field:'fShowDelayDays'
      });
      this.add(dayRadio1,col2,ind+=ls);
      this.add(dayRadio2,col2,ind+=ls);
      this.add(dayGroup);
      this.add(new Checkbox({text:'Show Invoices Due on Specified Date as Current Invoices',field:'fActualInvoices',value:1}),col2,ind+=ls);
      this.add(new Checkbox({text:'Use Accounting Periods in #N/L# instead of Age Limits',field:'fUseAccPeriod',value:1}),col2,ind+=ls);
      this.add( new Input({text:'Используемые учетные периоды, максимум 6',field:'fAccPeriods',width:120}),col1,ind+=ls);
      this.add(new Checkbox({text:'Separate column for unallocated payments',field:'fSeparateOnAcc',value:1}),col2,ind+=ls);

    }
};
