import mongoose from 'mongoose';

import '../models/User';
import config from '../../etc/config';

const User = mongoose.model('User');

export function setUpConnection() {
    //mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
    mongoose.connect('mongodb://test:1@ds117730.mlab.com:17730/diploma')
}

export function listOfUsers() {
    return User.find();
}

export function createUser(data) {
    const user = new User({
        title: data.title,
        image: data.image,
        description: data.description,
        price: data.price,
        averageResponse: data.averageResponse
    });

    return user.save();
}

export function deleteUser(id) {
    return User.findById(id).remove();
}