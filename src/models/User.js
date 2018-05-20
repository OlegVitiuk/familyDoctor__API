import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    surname: {
        type: String,
        required: [true, "surname is required"]
    },
    birthday: {
        type: String,
        required: [true, "birthday is required"]
    },
    email: {
        type: String,
        unique : true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    telephone: {
        type: String,
        required: [true, "telephone is required"]
    }
}, {collection: 'Users'});

const User = mongoose.model('User', UserSchema);

UserSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });
    });
});

export default User;