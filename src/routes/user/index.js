import User from "@models/User";
import {createUser} from "@utils/user";
import express from 'express';

export const userRouter = express.Router();

userRouter.get('/user', (req, res, next) => {
    User.find().then(data => res.send(data)).catch(next);
});

userRouter.post('/register', (req, res, next) => {
    createUser(req.body).then(data => res.send(data)).catch(next);
});

userRouter.post('/login', (req, res, next) => {
    //createUser(req.body).then(data => res.send(data)).catch(next);
});

userRouter.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).remove().then(data => res.send(data)).catch(next);
});
