import User from "@models/User";
import {createUser} from "@utils/user";
import express from 'express';
//import passport from "passport";
//import localStrategy from 'passport-local';
import {comparePassword} from "@utils/user";

//const strategy = localStrategy.Strategy;
export const userRouter = express.Router();

// passport.use(new strategy({
//         usernameField: 'email',
//         passwordField: 'password'
//     },
//     function (req,username, password, done) {
//
//         User.findOne({username: username}, function (err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {message: 'Incorrect email.'});
//             }
//             comparePassword(password, user.password, (err, isMatch) => {
//                 if(err) throw err;
//                 isMatch ? done(null,user) : done(null,false,{message: 'invalid password'})
//             });
//         });
//     }
// ));

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//         done(err, user);
//     });
// });


userRouter.post('/login'
    // passport.authenticate('local', {
    //     successRedirect: '/profile',
    //     failureRedirect: '/login',
    //     failureFlash: true
    // })
);

// userRouter.post('/login', (req, res, next) => {
//
//     //createUser(req.body).then(data => res.send(data)).catch(next);
// });

userRouter.get('/user', (req, res, next) => {
    User.find().then(data => res.send(data)).catch(next);
});

userRouter.post('/register', (req, res, next) => {
    createUser(req.body).then(data => res.send(data)).catch(() => {
        res.status(400).send({result: "false"});
        next();
    });
});

userRouter.delete('/delete/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id}).remove().then(data => res.send(data)).catch(next);
});
