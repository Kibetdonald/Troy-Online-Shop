const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    prd_cat:{ 
        required : true,
        type : String,
    },
    prd_title:{ 
        required : true,
        type : String,
     },
     prd_price:{ 
        required : true,
        type : Number,
     },
     prd_desc:{
         required: true,
         type: String,
     },
     prd_img: {
         required: true,
         type: String,

     },
     prd_keyword  :{
         required: true,
         type: String,
     },
     prd_quantity: {
         required: true,
         type: Number
     },

    }, {timestamp: true}

);
    const Category = mongoose.model('category', productSchema);
    module.exports = Category
    