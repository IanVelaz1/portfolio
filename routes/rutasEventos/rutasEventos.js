const Evento=require('../../models/modeloEventos/eventos');
 
module.exports=(app)=>{
  
 app.post('/evento',(req,res)=>{
   const evento=req.body;
   Evento.guardarEvento(evento,(error,evento)=>{
    if(error){
      res.json({error:error,success:false,msg:'error al guardar evento'});
    }else{
      res.json({success:true,evento});
    }
   });
 });

 app.get('/evento',(req,res)=>{
   Evento.recuperarEventos({},(error,eventos)=>{
    if(error){
      res.json({error:error,success:false,msg:'error al guardar eventos'});
    }else{
      res.json({success:true,eventos});
    }
   });
 });

 app.put('/evento/:id',(req,res)=>{
    const id=req.params.id;
    const evento=req.body;
  Evento.editarEventoById(id,evento,(error,evento)=>{
    if(error){
      res.json({error:error,success:false,msg:'error al editar evento'});
    }else{
      res.json({success:true,evento});
    }
  });
 });

 app.get('/evento/:id',(req,res)=>{
   const id=req.params.id;
   Evento.recuperarEventoById(id,(error,evento)=>{
    if(error){
      res.json({error:error,success:false,msg:'error al recuperar evento'});
    }else{
      res.json({success:true,evento});
    }
   });
 });

 app.delete('/evento/:id',(req,res)=>{
   const id=req.params.id; 
   Evento.eliminarEvento(id,(error,evento)=>{
    if(error){
      res.json({error:error,success:false,msg:'error al eliminar evento'});
    }else{
      res.json({success:true,evento});
    }
   });
 });

}
