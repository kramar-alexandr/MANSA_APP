// @flow
module.exports = ({modelsRegistry, data}) => {
    //example of aggragation function
    if(modelsRegistry.sequelize){
      console.log('with sequelize');
      if(!data.fAccNumber){
        let itemModel = modelsRegistry.getModel('Accounts');
        itemModel.findAll({
            attributes: [
            [ modelsRegistry.sequelize.fn('MAX', modelsRegistry.sequelize.col('fAccNumber')), 'max']
          ]
        }).then(
          result=>{
            let intVal = Number(result[0].dataValues.max);
            if(isNaN(intVal)) throw "Field has wrong type";
            data.fAccNumber = intVal + 1;
          },
          error=>{
            console.log(error);
          }
        )
      }
    } else {
      //temp
      throw "Regecting double recordCheck";
    }
    //example of complex query
    /*
    if(modelsRegistry.sequelize){
      const pricesModel = modelsRegistry.getModel('Prices');
      pricesModel.findAll(
        {
          where:{
            id:{ $gt:1 }
          }
        }
      ).then(
        result=>{
          console.log(result.length);
          if(result.length===0) throw "Not enaf prices...";
        },
        error=>{
          console.log(error);
        }
      );
    }
    */
};

