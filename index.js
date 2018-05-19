import express from 'express';
import bodyParser from 'body-parser';
//import {serverPort} from './src/config';
import {router} from '@routes/api';
import mongoose from 'mongoose';

const app = express();

//mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
mongoose.connect('mongodb://test:1@ds117730.mlab.com:17730/diploma');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use((req, res, next) => {
    bodyParser.json();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(router);

app.use((err,req,res,next)=>{
    res.status(422).send({error: err.message});
    next();
});

const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log("App now running on port", port);
});