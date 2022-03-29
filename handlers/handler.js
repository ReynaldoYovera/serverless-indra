'use strict';

const pool =require('../connection/connection')

module.exports.examenindraGet = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:`La variable  es: ${Number(event.page.numero)}`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
// Conexion a la bd
module.exports.rdsConexionBD = async (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;
  const sql = 'SELECT * FROM serverless_Indra_1.cabeceraPlanets';

  Pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(sql, function(error, results){
      if(error){
        callback({
          statusCode:400, 
          header:{
            'Content-Type':'application/json'
          },
          body: context.fail(JSON.stringify({
            success: false,
            message: error
          }))
        })
      }else{
        callback(null, {
          statusCode:200,
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            success: true,
            message:'!...exito..!',
            data: results
          })
        })
        connection.release();
      }
    })
  })
};