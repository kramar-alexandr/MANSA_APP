// @flow

const Label    = require('erpjs/core/client/components/Label.js');
const Window   = require('erpjs/core/client/components/Window.js');
const Table  = require('erpjs/core/client/components/Table.js');
const api = require('erpjs/core/client/api.js');

class ContextWindow extends Window {
    message: string;
    datadef:string;
    data:Array;
    fields:Array;
    output:string;
    query:Object;
    constructor() {
        super();
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
            this.toTopLayout();
        } else {
            this._openWindow(x, y);
        }
    }

    async _openWindow(x, y): Promise<any> {
        // if (this.render) this.render();
        this.render();
        super.open(x, y);
        this.toTopLayout();
    }

    async render():void {
        if(!this.data){
          this.data = await this.fetch();
        }
        const listTable = new Table({
            data          : this.data,
            resizable     : false,
            width         : this.width-20,
            height        : this.height-20,
            headersVisible: true,
            columnMinWidth: 30,
            doubleClick   : this.onSelect
        });
        this.add(listTable, 10, 10);
    }
    async fetch(): Promise<any> {
        let data = [];
        try {
            data = await api.list(this.datadef, this.query);
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
    close({id}):any{
      super.close();
      let records:Array = this.data.payload.filter(function(record){
        return record.id==id;
      });
      return records[0][this.output];
    }
}

module.exports = ContextWindow;
