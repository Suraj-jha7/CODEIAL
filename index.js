const express=require('express');
const app=express();
const port=8000;

//use express router

app.use('/',require('./routes/index'));



app.listen(3000,function(err){
    if(err)
    {
        //console.log('Error:',err);
        console.log(`Error in running the server:${err}`);
    }

    console.log(`server is running on port:${8000}`);
})