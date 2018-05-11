const Producto=require('../../models/modelProducto/producto');

module.exports=(app,upload)=>{
  
  app.post('/producto',upload.array('imagenes',5),(req,res)=>{
    
   console.log('====================================');
   console.log(req.body);
   console.log('====================================');

  });

}