import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: String,

});

const Card = mongoose.model('cards', CardSchema);
export default Card;