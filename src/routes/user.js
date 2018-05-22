import User from "@models/User";
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '@utils/config';

export const userRouter = express.Router();

userRouter.post('/login', (req, res, next) => {
    const {email, password} = req.body;

    User.findOne({email: email}).then(user => {
        if (user) {
            bcrypt.compare(password, user.password).then(rezult => {
                if (rezult) {
                    const token = jwt.sign({
                        id: user._id,
                        email: user.email
                    }, config.jwtSecret);
                    res.send({token})
                    next();
                } else {
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

userRouter.post('/register', (req, res, next) => {
    User.create(req.body).then(data => res.send(data)).catch(() => {
        res.status(400).send({result: "false"});
        next();
    });
});

userRouter.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).remove().then(data => res.send(data)).catch(next);
});
