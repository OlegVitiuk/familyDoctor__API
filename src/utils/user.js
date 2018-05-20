import User from "@models/User";

export const createUser = data => {
    return User.create(data);
}

export const comparePassword = (candidate, hash,callback) => {
    bcrypt.compare(candidate, hash, (err,isMatch) => {
        if(err) throw err;
        callback(null,isMatch);
    })
}