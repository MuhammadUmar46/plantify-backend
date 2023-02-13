const mongoose = require('mongoose');
const PORT = process.env.PORT ||3004 ;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/routes');
app.use(bodyParser.json());
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.utxcz7o.mongodb.net/?retryWrites=true&w=majority';
const connection = mongoose.connect(MONGO_URL)
.then((res)=>console.log('Database is connected now you can use',res))
.catch((err)=>console.log('The error is following : ',err));
console.log(connection);

app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on this ${PORT}`);
});
