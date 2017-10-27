const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

//db connections
let dbConfig = require(path.join(process.cwd(), './etc/db.json')).development;
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  logging: false
});
/*
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
const checkConnection = async()  => {
  try{
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
  } catch(err){
    console.error('Unable to connect to the database:', err);
  }
}
checkConnection();
*/
const bases = [
                path.join(process.cwd(),'./src/registers'),
                path.join(process.cwd(),'./src/settings')
              ];
const outs = [];
const { lstatSync, readdirSync } = require('fs');

const getDirectories = source =>
  readdirSync(source)
    .map(name => path.join(source, name))
    .filter(item=>lstatSync(item).isDirectory())
    .map(p=>path.basename(p));

bases.forEach((base)=>{
  outs.push.apply(outs,getDirectories(base));
});
//todo:add functionality for checking existing fields & refactoring code!
outs.forEach((register)=>{
  //sequelize.query(`SELECT role FROM permissions`).then((result)=>console.log(result));
  sequelize.query(`INSERT INTO permissions (role, register, read, write) VALUES ('admin','${register}',true,true);`)
    .then(console.log(`inserted ${register} permission`));
  });

