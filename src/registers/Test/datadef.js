//AccVc
module.exports = {
  fields:{
    id:{ type: 'INTEGER', primaryKey: true, autoIncrement: true},
    name: { public: true, type: 'TEXT',unique:true},
    phone: { public: true, type: 'TEXT'}
  }
};
