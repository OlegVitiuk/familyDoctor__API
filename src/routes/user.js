import User from "@models/User";
import express from 'express';
import bcrypt from 'bcrypt';

export const userRouter = express.Router();

userRouter.post('/login', (req, res, next) => {
    const {email, password} = req.body;

    User.findOne({email: email}).then(user => {
        if (user) {
            bcrypt.compare(password, user.password).then(rezult => {
                if(rezult){
                    res.status(401).send({error: "ok!"});
                    next();
                } else{
                    res.status(401).send({error: "Invalid password!"});
                    next();
                }
            });
        } else {
            res.status(401).send({error: "Invalid email!"});
            next();
        }
    });
});

userRouter.get('/user', (req, res, next) => {
    User.find().then(data => res.send(data)).catch(next);
});

userRouter.post('/register', (req, res, next) => {
    User.create(req.body).then(data => res.send(data)).catch(() => {
        res.status(400).send({result: "false"});
        next();
    });
});

userRouter.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).remove().then(data => res.send(data)).catch(next);
});
