const mongoose = require('mongoose');
const PORT = process.env.PORT ||3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Authrouter = require('./routes/Authroutes');
const productRouter = require('./routes/productRoute')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// MONGODB CONNECTION STRING
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.utxcz7o.mongodb.net/?retryWrites=true&w=majority';

// MONGODB CONNECTION METHOD
const connection = mongoose.connect(MONGO_URL)
.then((res)=>console.log('Database is connected now you can use',res))
.catch((err)=>console.log('The error is following : ',err));
console.log(connection);

// For Using The Routes defined in router.js file
app.use(Authrouter);


// For getting the product routers
app.use(productRouter);


// App is running on the default PORT 
app.listen(PORT,()=>{
    console.log(`Server is running on this http://localhost:${PORT}`);
});
