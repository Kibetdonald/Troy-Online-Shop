//require mongoose
const mongoose = require ('mongoose');
//get new mongoose schema
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3

    },

},{
    timestamps: true,
}
);

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;
