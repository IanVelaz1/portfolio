const mongoose=require('mongoose');

const navbarSchema=new mongoose.Schema({
   
   titulo:{
     type:String,
     required:true
   },
   tipo:Number,
   enlace:String,
   pagina:String,
   tituloPagina:String

   
});

const Navbar=module.exports=mongoose.model('navbar',navbarSchema);

module.exports.guardarNavbar=(navbar,callback)=>{
  Navbar.create(navbar,callback);
}

module.exports.recuperarNavbar=(navbar,callback)=>{
  Navbar.find(navbar,callback);
}

module.exports.recuperarNavbarById=(id,callback)=>{
  Navbar.findById(id,callback);
}

module.exports.eliminarNavbar=(id,callback)=>{
  Navbar.findByIdAndRemove(id,callback);
}

module.exports.editarNavbar=(id,navbar,callback)=>{
  Navbar.findByIdAndUpdate(id,navbar,callback);
}