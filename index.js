let app=require('express')();
app.get('/',(req,res)=>res.send('Hola desde api'));
app.listen(3000,()=>console.log('Todo bien viejon :)'))