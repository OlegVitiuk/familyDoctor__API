import mongoose from 'mongoose';

const Schema  = mongoose.Schema;

const UserSchema = new Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
    price: {type: Number},
    averageResponse: {type: Number}
},{collection: 'Users'});

const User = mongoose.model('User',UserSchema);