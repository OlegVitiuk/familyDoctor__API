import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "field is required"]
    },
    surname: {
        type: String,
        required: [true, "field is required"]
    },
    birthday: {
        type: String,
        required: [true, "field is required"]
    },
    email: {
        type: String,
        required: [true, "field is required"]
    },
    password: {
        type: String,
        required: [true, "field is required"]
    },
    telephone: {
        type: String,
        required: [true, "field is required"]
    }
}, {collection: 'Users'});

const User = mongoose.model('User', UserSchema);

export default User;