const mongoose=require('mongoose');

const productoSchema=new mongoose.Schema({
  
  idProd:{
    type:String,
    required:true
  },nombreProducto:{
    required:true,
    type:String
  },
  requiereInventario:{
    type:Boolean,
    required:true
  },
  sku:{
    type:String,
    required:false
  },
  descripcionProducto:{
    type:String,
    required:false
  },imagenes:{
    type:[File]
  },
  tienePromocion:{
    type:Boolean,
    default:false
  },
  precioPromocion:{
    type:Number,
    default:0
  },
  proveedor:{
    type:String
  },
  added:{
    type:Boolean,
    default:false
  },comentarios:{
    type:Array,
  },
  preguntas:{
    type:Array
  },
  cantidadCarrito:{
    type:Number,
    default:1
  },
  rating:{
    type:Number,
    default:0
  }
  

});


const Producto=module.exports=mongoose.model('productos',productoSchema);


module.exports.guardarProducto=(producto,callback)=>{
   
  Producto.create(producto,callback);

}