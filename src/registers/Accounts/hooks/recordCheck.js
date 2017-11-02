// @flow
module.exports =  ({modelsRegistry}) => {
  
    if(modelsRegistry.sequelize){
      const objectBalancesModel = modelsRegistry.getModel('ObjectBalances');
      objectBalancesModel.findAll().then(
        result=>{
          console.log(result.length);
          if(result.length<3) throw "Not enaf object balances...";
        },
        error=>{console.log('Error');}
      );
      //if(rcrds.length<2) throw new Error('ObjectBalances are empty!');
    }
};

