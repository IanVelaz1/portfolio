const mongoose=require('mongoose');

const eventoSchema=new mongoose.Schema({
   
  titulo:String,
  precio:Number,
  descripcion:String,
  imagenes:Array,
  fechaReservacion:Date,
  fechaCompra:Date,
  nombreComprador:String,
  direccion:String,
  telefono:String,
  email:String,
  comentarios:String


});

const Evento=module.exports=mongoose.model('eventos',eventoSchema);

module.exports.guardarEvento=(evento,callback)=>{
  Evento.create(evento,callback);
}

module.exports.recuperarEventos=(evento,callback)=>{
  Evento.find(evento,callback);
}

module.exports.recuperarEventoById=(id,callback)=>{
  Evento.findById(id,callback);
}

module.exports.editarEventoById=(id,evento,callback)=>{
  Evento.findByIdAndUpdate(id,evento,callback);
}

module.exports.eliminarEvento=(id,callback)=>{
  Evento.findByIdAndRemove(id,callback);
}