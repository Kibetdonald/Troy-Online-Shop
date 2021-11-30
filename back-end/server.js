//creating a serve
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//environment variables
require('dotenv').config();


const app = express();
const port = process.env.port;

/*middleware
Just from how the name suggest it appears in the middle
between an initial request and final intended route...
*/
app.use(cors());
app.use(express.json());
const uri = process.env.db_connect;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB CONNECTION SUCCESSFULL")
    })
     

//requiring the files
const categoriesRouter = require('./routes/category.route');
const productRouter = require('./routes/product.route');

//using the files
app.use('/categories', categoriesRouter);
app.use('/products', productRouter);

//listening
app.listen(port, () =>{
    console.log(`Serve is running on port: ${port} `);

});