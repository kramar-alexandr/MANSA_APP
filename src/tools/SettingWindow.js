// @flow
const DetailWindow     = require('erpjs/core/client/windows/DetailWindow.js');
const api      = require('erpjs/core/client/api');
const Register = require('erpjs/core/client/Register.js');
const { deepClone } = require('erpjs/core/utils.js');
const states =  require('erpjs/core/client/windows/DetailStates')

module.exports = class SettingWindow extends DetailWindow {
    resizable    : boolean;
    register     : Register;
    _inputsBinds : Array<any>;
    id           : string;
    data         : any;
    datadef      : string;
    defaultData  : Object;
    isDublicate  : boolean;
    isSetting    : boolean;

    constructor(args: {
        register: Register, id?: string, isDublicate ?: boolean, isSetting ?: boolean
    }):void {
        args.state = 'fuck';
        super(args);
        //this.setState(states.new);
        if (args.isSetting) this.isSetting = args.isSetting;
        console.log(this.getState());
    }

    async open(): Promise<any> {
        if (this.id)        await this.fetch(this.id);
        if (this.isSetting) await this.fetchSetting();
        await super.open();
        // this.window.set_sensitive(!this.data.lock);
        this._fillInputs(this.data);
    }

    async fetchSetting(): Promise<any> {
        this.data = await api.list(this.datadef, {});
        if (this.data.length) {
            this.data = this.data[0];
            this.id = this.data.id;
        }
        this.defaultData = deepClone(this.data);
    }
}