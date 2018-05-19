import User from "@models/User";
import passport from 'passport';
import LocalStrategy from 'passport-local';
export const localStrategy = LocalStrategy.Strategy;

export const userRoutes = router =>{
    router.get('/user', (req, res, next) => {
        User.find().then(data => res.send(data)).catch(next);
    });

    router.post('/users', (req, res, next) => {
        User.create(req.body).then(data => res.send(data)).catch(next);
    });

    router.delete('/users/:id', (req, res, next) => {
        User.findByIdAndRemove({_id: req.params.id}).remove().then(data => res.send(data)).catch(next);
    });
}