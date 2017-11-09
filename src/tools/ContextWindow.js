// @flow

const Label    = require('erpjs/core/client/components/Label.js');
const Window   = require('erpjs/core/client/components/Window.js');
const Table  = require('erpjs/core/client/components/Table.js');
const Register  = require('erpjs/core/client/Register.js');
const api = require('erpjs/core/client/api.js');

class ContextWindow extends Window {
    message: string;
    datadef:string;
    data:Array;
    fields:Array;
    output:string;
    query:Object;
    register:Register;
    constructor(args:{register:Register}) {
        super();
        this.register       = args.register;
        this.onSelect   = ()=> {};
        this.datadef = null;
        this.message = "";
        this.title  = this.datadef;
        this.width  = 400;
        this.height = 300;
        this.query = {};
        this.data = null;
        this.fields = null;
        this.output = null;
    }

    async open(x, y): Promise<any> {
        if (this.isOpen) {
            await this.refreshTable();
            this.toTopLayout();
        } else {
            this._openWindow(x, y);
        }
    }

    async _openWindow(x, y): Promise<any> {
        await this.refreshTable();
        super.open(x, y);
        if(this._isRendered){
          this.setStyle('opacity', '1');
        }
        this.toTopLayout();
    }

    async refreshTable():void {
      this.data = await this.fetch();

      if (!this.table) {
          this.table = new Table({
              data          : this.data,
              resizable     : false,
              width         : this.width-20,
              height        : this.height-20,
              headersVisible: true,
              columnMinWidth: 30,
              doubleClick   : this.onSelect
          });
          this.add(this.table, 0, 0);
      } else {
          this.table.setData(this.data);
      }
    }
    async fetch(): Promise<any> {
        let data = [];
        try {
            data = await api.list(this.datadef, {id:5});
        } catch (err) {
            alert(err);
        } finally {
            const fields  = this.fields;
            const headers = [];

            fields.forEach(field => {
                headers.push(field);
            });

            return {
                headers: headers,
                payload: data
            };
        }
    }
    init({datadef,fields,output}):void {
      this.datadef = datadef;
      this.fields = fields;
      this.output = output;
    }
    getOutput({id}):any{
      let records:Array = this.data.payload.filter((record)=>{
        return record.id==id;
      });
      return records[0][this.output];
    }
}

module.exports = ContextWindow;
