import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/databaseUtils';
import {serverPort} from '../etc/config';

db.setUpConnection();

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    bodyParser.json();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/users', (req, res) => {
    db.listOfUsers().then(data => res.send(data));
});

app.post('/users', (req, res) => {
    db.createUser(req.body).then(data => res.send(data));
});

app.delete('/users/:id', (req, res) => {
    db.deleteUser(req.params.id).then(data => res.send(data));
});

const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log("App now running on port", port);
});